const router = require('express').Router()
const authentication = require('./authentication')
const home = require('./home')
const profile = require('./profile')
const city = require('./city')


// NOTE: There's probably a more efficient way to 'use' all the files in a folder. Figure it out later.
router.use('/', authentication)
router.use('/', home)
router.use('/', profile)
router.use('/', city)

module.exports = router
