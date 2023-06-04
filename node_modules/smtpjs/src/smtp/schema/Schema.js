const _ = require('lodash')

class Schema {
  constructor (schema = {}, dependencies = {}) {
    if (dependencies.logger) {
      this.logger = dependencies.logger
    }

    if (schema.config) {
      const config = _.cloneDeep(schema.config)
      this.setter(config)
    }

    if (schema.data) {
      const data = schema.data()
      this.setter(data)
    }

    if (schema.events) {
      this.setter(schema.events)
    }
  }

  setter (object = {}) {
    Object.entries(object).forEach(([key, value]) => {
      if (typeof value === 'function') {
        value.bind(this)
      }

      this[key] = value
    })
  }

  static factory (schema, dependencies = {}) {
    return new Schema(schema, dependencies)
  }
}

module.exports = Schema