const mailGenerator = require('../mail/mail')

/**
 * Connection
 * client connection that handles io
 *
 * @class Connection
 */
class Connection {
  constructor (socket, options = {}) {
    this.socket = socket
    this.logger = options.logger
    this.schema = options.schema
    this.parser = options.parser
    this.data = false
    this.done = false
    this.mail = mailGenerator()
    this.send = (message) => {
      this.socket.write(message)
    }

    this.schema.connect(this.socket)
    this.send('220 localhost Simple Mail Transfer Service Ready\r\n')

    this.socket.on('data', this.onData.bind(this))
    this.socket.on('close', () => {
      this.socket.destroy()
    })
  }

  onData (buffer) {
    const line = buffer.toString()

    this.parse(line)
  }

  parse (line = '') {
    const { action, params } =  this.parser(line)

    return this.run(line, action, params)
  }

  runData (line) {
    if (line === '\r\n.\r\n' || line === '.\r\n') {
      this.data = false

      return this.done = true
    }

    return this.mail.addMessage(line)
  }

  async run (line, action, params) {
    if (this.schema[action]) {
      await this.schema[action]({
        action,
        params,
      })
    }

    if (action === 'EHLO') {
      return this.send('250 smtp.example.com, Hi! you sent me a EHLO\r\n')
    }

    if (action === 'HELO') {
      return this.send('250 smtp.example.com, I am glad to meet you\r\n')
    }

    if (action === 'MAIL FROM') {
      this.mail.setFromSender(params)
      return this.send('250 Ok\r\n')
    }

    if (action === 'RCPT TO') {
      this.mail.addRecipient(params)
      return this.send('250 Ok\r\n')
    }

    if (action === 'DATA') {
      // new thing we have to run
      this.data = true
      return this.send('354 End data with <CR><LF>.<CR><LF>\r\n')
    }

    if (action === 'QUIT') {
      return this.send('221 Bye\r\n')
      // close connection
    }

    if (this.data) {
      this.runData(line)

      if (this.done) {
        return this.send('250 Ok: queued as 12345\r\n')
      }
    }

    if (action === 'VRFY') {
      return this.send('252 The recipient cannot be verified\r\n')
    }
  }

  getMail () {
    return this.mail.getMail()
  }
}

module.exports = Connection