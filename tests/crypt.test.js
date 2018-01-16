'use strict'

const test = require('tape')

const { encrypt, decrypt } = require('../index')

const SECRET = 'rlvt'
const KEY = '__MY_EXAMPLE_KEY__'
const STRING_TO_ENCRYPT = 'coco l escargot'

test('Encrypt String', (assert) => {
  const encrypted = encrypt(STRING_TO_ENCRYPT, `${KEY}${SECRET}`)

  assert.equal(encrypted, 'NjdjY2ZjNTBjNDcyY2FhM2JhZmYwZWE2YTZhZDE3ZjI=')
  assert.end()
})

test('Encrypt and Decrypt String', (assert) => {
  const encrypted = encrypt(STRING_TO_ENCRYPT, `${KEY}${SECRET}`)
  const decrypted = decrypt(encrypted, `${KEY}${SECRET}`)

  assert.equal(decrypted, STRING_TO_ENCRYPT)
  assert.end()
})
