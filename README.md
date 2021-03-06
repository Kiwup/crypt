# @rlvt/crypt

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)  

[![node](https://img.shields.io/badge/node-%3E=8.9.4-brightgreen.svg)]()
[![CircleCI](https://circleci.com/gh/Kiwup/crypt.svg?style=shield)](https://circleci.com/gh/Kiwup/crypt)

## How to
This package provides 2 functions, 
```javascript 
encrypt(input: String, password: String)
``` 
and  
```javascript
decrypt(input: String, password: String)
```

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
