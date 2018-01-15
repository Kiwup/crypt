'usr strict'

const crypto = require('crypto')
const { generateKey, generateInitializationVector } = require('./utils')

const encrypt = (input, password) => {
  const key = generateKey(password)
  const initializationVector = generateInitializationVector(password)

  const data = Buffer.from(input.toString(), 'utf8').toString('binary')

  const cipher = crypto.createCipheriv('aes-256-cbc', key, initializationVector.slice(0, 16))
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  const encoded = Buffer.from(encrypted, 'binary').toString('base64')

  return encoded
}

const decrypt = (input, password) => {
  const key = generateKey(password)
  const initializationVector = generateInitializationVector(password)

  const inputReplaced = input.replace(/-/g, '+').replace(/_/g, '/')
  const data = Buffer.from(inputReplaced, 'base64').toString('binary')

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, initializationVector.slice(0, 16))
  let decrypted = decipher.update(data, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  const decoded = Buffer.from(decrypted, 'binary').toString('utf8')

  return decoded
}

module.exports = {
  encrypt,
  decrypt
}
