const net = require('net')

class Client {
  constructor () {
    this.socket = new net.Socket()
    this.socket.connect(1337, '127.0.0.1', () => {
      this.socket.write('Hello, server! Love, Client.')
    })

    this.socket.on('data', this.onData.bind(this))
    this.socket.on('close', () => {
      this.socket.destroy()
    })
  }

  onData (buffer) {
    const line = buffer.toString()
    console.log(' - ', line)
  }
}

// sets up a dummy client for testing
new Client()
