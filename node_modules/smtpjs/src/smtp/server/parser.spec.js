const Server = require('./Server')

describe('Server.parser', () => {
  it('HELO relay.example.com', () => {
    const result = Server.parser('HELO relay.example.com')
    expect(result).toEqual({
      full: "HELO relay.example.com",
      action: "HELO",
      params: "relay.example.com"
    })
  })

  it('MAIL FROM:<bob@example.com>', () => {
    const result = Server.parser('MAIL FROM:<bob@example.com>')
    expect(result).toEqual({
      full: "MAIL FROM:<bob@example.com>",
      action: "MAIL FROM",
      params: "<bob@example.com>"
    })
  })

  it('RCPT TO:<alice@example.com>', () => {
    const result = Server.parser('RCPT TO:<alice@example.com>')
    expect(result).toEqual({
      full: "RCPT TO:<alice@example.com>",
      action: "RCPT TO",
      params: "<alice@example.com>"
    })
  })

  it('RCPT TO:<theboss@example.com>', () => {
    const result = Server.parser('RCPT TO:<theboss@example.com>')
    expect(result).toEqual({
      full: "RCPT TO:<theboss@example.com>",
      action: "RCPT TO",
      params: "<theboss@example.com>"
    })
  })

  it('DATA', () => {
    const result = Server.parser('DATA')
    expect(result).toEqual({
      full: "DATA",
      action: "DATA",
      params: ""
    })
  })

  it('QUIT', () => {
    const result = Server.parser('QUIT')
    expect(result).toEqual({
      full: "QUIT",
      action: "QUIT",
      params: ""
    })
  })
})