const COMMANDS = [
  'HELO',
  'EHLO',
  'MAIL FROM',
  'RCPT TO',
  'SIZE',
  'DATA',
  'VRFY', // "252 Argument not checked"
  'TURN',
  'AUTH',
  'RSET',
  'EXPN', // "off"
  'HELP',
  'QUIT',
]

module.exports = {
  COMMANDS,
}