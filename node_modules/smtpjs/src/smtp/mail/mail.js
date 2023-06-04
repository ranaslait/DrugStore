// todo add meta information
module.exports = function () {
  const mail = {
    to: [],
    from: '',
    message: [],
  }

  return {
    addRecipient: (email) => {
      mail.to.push(email)

      return email
    },
    setFromSender: (from) => {
      mail.from = from

      return from
    },
    addMessage: (message) => {
      mail.message.push(message)

      return message
    },
    getMail () {
      return mail
    }
  }
}