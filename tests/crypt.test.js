'use strict'

const test = require('tape')

const { encrypt, decrypt } = require('../index')

const SECRET = 'rlvt'
const KEY = '__MY_EXAMPLE_KEY__'
const STRING_TO_ENCRYPT = 'coco l escargot'

test('Encrypt String', (assert) => {
  const encrypted = encrypt(STRING_TO_ENCRYPT, `${SECRET}${KEY}`)

  assert.equal(encrypted, 'Y2YzYTg3YzEwZGNhODA2MzgxNTIwMzcyYTdmMTkzMDI=')
  assert.end()
})

test('Encrypt and Decrypt String', (assert) => {
  const encrypted = encrypt(STRING_TO_ENCRYPT, `${SECRET}${KEY}`)
  const decrypted = decrypt(encrypted, `${SECRET}${KEY}`)

  assert.equal(decrypted, STRING_TO_ENCRYPT)
  assert.end()
})
