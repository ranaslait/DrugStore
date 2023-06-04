# smtpjs

testing tls, included a self signed cert
run the client with this env variable
`NODE_TLS_REJECT_UNAUTHORIZED=0`

## usage
basic usage
```js
const Server = require('smtpjs')
const server = new Server()
// outputs >> [2020-06-22T02:39:08.611Z] [LOG]   - Server start on ip: 127.0.0.1 port: 1337
```

## options
the 1st argument accepts a schema the second any dependencies
```js
const Server = require('smtpjs')
const schema = {}
const dependencies = {
  logger: {...} // see `Logger Options`
}

const server = new Server(schema, dependencies)
```

### Schema
#### events
theres all the smtp commands that fire if defined for example the HELO command
```js
const schema = {
  events: {
    HELO (ctx) {
      // when server receives the `HELO` it runs this code block
      this.logger.debug(' - promise')
      return new Promise ((resolve, reject) => {
        this.logger.debug(' - timeout')
        setTimeout(() => {
          this.logger.info('wait 1 second')
          resolve('done')
        },1000)
      })
    }

    // outputs on HELO
    // [2020-06-22T03:01:21.523Z] [DEBUG] -  - promise
    // [2020-06-22T03:01:21.523Z] [DEBUG] -  - timeout
    // [2020-06-22T03:01:22.528Z] [INFO]  - wait 1 second
  }
}
```

not only are the stmp commands but there are 3 additional
on `connect`, `error`, and `done`
#### connect
accepts a Socket object, which is the nodejs Socket with additional field
`id`
```js
const schema = {
  events: {
      connect (socket) {
      const ip = socket.remoteAddress
      const id = socket.id
      this.logger.log(`id: ${id} ip: ${ip}`)
    },
  }
}
```

#### error
accepts error object and the current status of the email

```js
const schema = {
  events: {
      error (error, mail) {
      // log error?
      this.logger.log('Error', error)

      // still want to see what the mail is
      this.logger.log(mail)
    },
  }
}
```

####

## SMTP Response Codes from and it's Definition:
```
220 - SMTP Service ready.
221 - Service closing.
250 - Requested action taken and completed.
251 - The recipient is not local to the server, but the server will accept and forward the message.
252 - The recipient cannot be verified, but the server accepts the message and attempts delivery.
354 - Start message input and end with .. This indicates that the server is ready to accept the message itself (after you have told it who it is from and where you want to to go).
421 - The service is not available and the connection will be closed.
450 - The requested command failed because the user's mailbox was unavailable (for example because it was locked). Try again later.
451 - The command has been aborted due to a server error. Not your fault. Maybe let the admin know.
452 - The command has been aborted because the server has insufficient system storage.
500 - The server could not recognize the command due to a syntax error.
501 - A syntax error was encountered in command arguments.
502 - This command is not implemented.
503 - The server has encountered a bad sequence of commands.
504 - A command parameter is not implemented.
521 - This host never accepts mail; a response by a dummy server.
541 - The message could not be delivered for policy reasons—typically a spam filter. (Only some SMTP servers return this error code.)
550 - The requested command failed because the user's mailbox was unavailable (for example because it was not found, or because the command was rejected for policy reasons).
551 - The recipient is not local to the server. The server then gives a forward address to try.
552 - The action was aborted due to exceeded storage allocation.
553 - The command was aborted because the mailbox name is invalid.
554 - The transaction failed. Blame it on the weather.
555 - The server does not recognize the email address format, and delivery is not possible.
556 - The message would have to be forwarded, but the receiving server will reject it.
```
