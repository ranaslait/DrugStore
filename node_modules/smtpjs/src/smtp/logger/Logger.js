const _ = require('lodash')
const util = require('util')
const kleur = require('kleur')

const LOG_LEVELS = {
  'fatal': { value: 50, mapping: 'error' },
  'error': { value: 40, mapping: 'error' },
  'warn': { value: 30, mapping: 'warn' },
  'info': { value: 20, mapping: 'info' },
  'log': { value: 20, mapping: 'log' },
  'debug': { value: 10, mapping: 'debug' },
  'all': { value: 0, mapping: 'log' },
}

const COLOR_MAPPINGS = {
  'fatal': kleur.red().inverse,
  'error': kleur.red,
  'warn': kleur.yellow,
  'info': kleur.green,
  'log': kleur.green,
  'debug': kleur.magenta,
}

class Logger {
  /**
   * options object
   *  {
   *    level: 'warn',
   *  }
   * @param {Object} options - options object
   */
  constructor (options = {}) {
    const noop = () => {}

    this.level = _.get(options, 'level', 'all')
    this.logger = _.get(options.logger) || console

    this.debug = noop
    this.log = noop
    this.info = noop
    this.warn = noop
    this.error = noop
    this.fatal = noop

    const levelValue = _.get(LOG_LEVELS, `${this.level}.value`, LOG_LEVELS['fatal'].value)
    console.log("Logger -> noop -> levelValue", levelValue)


    // only add logging methods based on logging level
    Object.entries(LOG_LEVELS).forEach(([key, level]) => {
      if (levelValue <= level.value) {
        this[key] = (...message) => {
          this.logger[level.mapping](Logger.formatted(key, ...message))
          return message
        }
      }
    })
  }

  static formatted (type = '', ...message) {
    const msg = message.reduce((accumulator, msg) => {
      if (typeof msg === 'object') {
        msg = `${util.inspect(msg, { showHidden: false, depth: 2, colors: kleur.enabled, breakLength: Number.POSITIVE_INFINITY })}`
      }

      accumulator += `${msg} `

      return accumulator
    }, '')

    const timestamp = kleur.grey(`[${new Date().toISOString()}]`)
    const levelColor = COLOR_MAPPINGS[type]
    const level = `[${type.toUpperCase()}]`.padEnd(7)

    return `${timestamp} ${levelColor(level)} - ${msg}`
  }
}

module.exports = Logger
