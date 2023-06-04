const { Resolver } = require('dns')
const resolver = new Resolver()
resolver.setServers(['1.1.1.1'])


function resolveUrl (url) {
  return new Promise((resolve, reject) => {
    resolver.resolve4(url, (err, addresses) => {
      if (err) {
        return reject(err)
      }

      return resolve(addresses[0])
    })
  })
}

function reverseIp (ip = '') {
  return ip.split('.').reverse().join('.')
}

async function isBlacklisted (url) {
  const ip = await resolveUrl(url)
  const name = `${reverseIp(ip)}.zen.spamhaus.org`
  // const name = `2.0.0.127.zen.spamhaus.org`
  const isBlacklisted = await resolveUrl(name).catch(e => false)

  return Boolean(isBlacklisted)
}

module.exports = isBlacklisted;
