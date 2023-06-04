const _ = require('lodash')
const { COMMANDS } = require('../constants')
const Logger = require('../logger/Logger')
const Schema = require('../schema/Schema')
const shortid = require('shortid')
const tls = require('tls')
const fs = require('fs')
const net = require('net')
const Connection = require('../connection/Connection.js')

const ENV = process.env.NODE_ENV
const isDev = ENV === undefined || ENV === 'development'
const server = isDev? net: tls
const commandsRegexStr = `^(${COMMANDS.join('|')}):? ?(.*)`
const commandsRegex = new RegExp(commandsRegexStr)

class Server {
  constructor (schema, dependencies = {}) {
    const { serverOptions, ip, port } = this.getOptions(schema)

    if (!dependencies.logger) {
      const loggerOptions = _.get(schema, 'logger', {})
      dependencies.logger = new Logger(loggerOptions)
    }

    this.logger = dependencies.logger
    this.schema = schema
    this.connections = {}
    this.server = server.createServer(serverOptions, this.createServerHandler.bind(this))
    this.server.listen(port, ip)
    this.logger.log(`Server start on ip: ${ip} port: ${port}`)
  }

  static factory (schema, dependencies = {}) {
    return new Server(schema, dependencies)
  }

  getOptions (schema = {}) {
    const key = _.get(schema, 'config.key', '')
    const cert = _.get(schema, 'config.cert', '')
    const ip = _.get(schema, 'config.ip', '127.0.0.1')
    const port = _.get(schema, 'config.port', 1337)

    return {
      serverOptions: { key, cert },
      ip,
      port,
    }
  }

  createServerHandler (socket) {
    const id = shortid.generate()
    socket.id = id
    const parser = Server.parser
    const logger = this.logger
    const schema = Schema.factory(this.schema, { logger })
    const connection = new Connection(socket, { logger, parser, schema })

    this.connections[id] = connection

    socket.on('error', (e) => {
      schema.error(e, connection.getMail())
    })

    socket.on('close', (args) => {
      const id = socket.id || ''
      this.removeId(id)

      // todo pass connection and mail
      return schema.done(connection.getMail())
    })
  }

  static parser (line = '') {
    const parsed = commandsRegex.exec(line)
    let full = ''
    let action = ''
    let params = ''

    if (parsed && parsed.length) {
      full = parsed[0],
      action = parsed[1],
      params = parsed[2]
    }

    return {
      full,
      action,
      params,
    }
  }

  getServer () {
    return this.server
  }

  removeId (id) {
    delete this.connections[id]
  }

  /* debugging methods below */
  send (id, line) {
    this.connections[id].parse(line)
  }

  list () {
    return Object.keys(this.connections)
  }

  getMail (id) {
    return this.connections[id] && this.connections[id].getMail()
  }

  getConnectionCount () {
    return new Promise((resolve, reject) => {
      this.server.getConnections((error, count) => {
        if (error) {
          // this.logger.fatal(error)
          return reject(error)
        }

        return resolve(count)
      })
    })
  }
  /* end debugging code */
}

module.exports = Server