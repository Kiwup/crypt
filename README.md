# Crypt

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![CircleCI](https://circleci.com/gh/Kiwup/tracker-service/tree/master.svg?style=shield&circle-token=)](https://circleci.com/gh/Kiwup/crypt/tree/master)


## How to
This package provide 2 functions, ```encrypt()``` and ```decrypt()```

```javascript
const assert = require('assert')
const { encrypt, decrypt } = require('@rlvt/crypt')

const PASSWORD = 'rubikscube'
const MSG = 'OnePlus 5T > Apple iPhone X'

const encrypted = encrypt(MSG, PASSWORD)
const decrypted = decrypt(encrypted, PASSWORD)

assert.equal(encrypted, MSG)
// AssertionError [ERR_ASSERTION]: 'Mzc0NDFkMTdhNzhhOTFmMzY5MjI5NzQwNmVhZGJmZjY3NjRlMTViYjRkYzE0ZTI5ZmEwY2Y2MGQxYzRlZDQ1NQ==' == 'OnePlus 5T > Apple iPhone X'
assert.equal(decrypted, MSG)
// undefined

```
