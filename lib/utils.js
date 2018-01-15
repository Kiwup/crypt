'use strict'

const crypto = require('crypto')

const generateKey = (password) => {
  const cryptographicHash = crypto.createHash('md5')
  cryptographicHash.update(password)
  const key = cryptographicHash.digest('hex')

  return key
}

const generateInitializationVector = (password, key) => {
  const cryptographicHash = crypto.createHash('md5')
  cryptographicHash.update(`${password}${key}`)
  const initializationVector = cryptographicHash.digest('hex')

  return initializationVector
}

module.exports = {
  generateKey,
  generateInitializationVector
}
