
const vorpal = require('vorpal')()

module.exports = function (options) {
  vorpal
    .command('send [id] [line...]', 'sends a tcp command to current state.')
    .action(function (args, callback) {
      this.log(args)
      if (!args.line || !args.line.length) {
        return callback()
      }

      const line = args.line.join(' ')
      const id = args.id || ''

      options.send(id, line)

      this.log(line)
      callback()
    })

  vorpal
    .command('count', 'Gets the current number of connections.')
    .action(function (args, callback) {
      return options.getConnectionCount()
        .then((connections) => {
          this.log(`connection count: ${connections}`)
          return connections
        })
        .catch((e) => {
          this.log(e)
          return e
        })
        .finally(() => {
          callback()
        })
    })

  vorpal
    .command('ls', 'List current connection id')
    .action(function (args, callback) {
      this.log(options.list())
      callback()
    })

  vorpal
    .command('mail [id]', 'Shows the current status of the mail')
    .action(function (args, callback) {
      const id = args.id
      this.log(options.getMail(id))
      callback()
    })
  vorpal
    .delimiter('repl > ')
    .show()
}