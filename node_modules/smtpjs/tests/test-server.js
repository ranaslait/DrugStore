const Server = require('../src/smtp/server/Server.js')
const repl = require('../src/smtp/repl/repl')

const schema = {
  // local console logger config
  logger: {
    level: 'all',
  },

  config: {
    ip: '127.0.0.1',
    port: 1337,
    key: '',
    cert: '',
    timeout: 100, // 100 seconds default
  },
  data () {
    return {
      accept: true
    }
  },
  events: {
    // onConnect
    connect (socket) {
      const ip = socket.remoteAddress
      const id = socket.id
      this.logger.log(`id: ${id} ip: ${ip}`)
    },

    // on socketError
    error (error, mail) {
      // log error?
      this.logger.log('Error', error)

      // still want to see what the mail is
      this.logger.log(mail)
    },

    // on done
    done (mail) {
      return new Promise((resolve, reject) => {
        // save mail somewhere
        this.logger.info(mail)

        resolve('donzo')
      })
    },

    // SMTP events
    // todo pass send method
    HELO (ctx) {
      this.logger.debug(' - promise')
      return new Promise ((resolve, reject) => {
        this.logger.debug(' - timeout')
        setTimeout(() => {
          this.logger.info('wait 1 second')
          resolve('done')
        },1000)
      })
    },
    EHLO (ctx) {
      this.logger.log('EHLO called')
    },
    AUTH (ctx) {
      this.logger.log(ctx)
    },
    // any other smtp command with ctx
  }
}

const dependencies = {
  // for simple console based logger
  // logger: new Logger()

  // if you want to use winston
  // logger: winston.createLogger({...})

  // using loggly
  // logger: loggly.createClient({...})
}

const server = Server.factory(schema, dependencies)

const replOptions = {
  getConnectionCount: () => server.getConnectionCount(),
  list: () => server.list(),
  send: (id, line) => server.send(id, line),
  getMail: (id) => server.getMail(id)
}

repl(replOptions)
