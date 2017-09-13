const router = require('express').Router()
const authentication = require('./authentication')
const home = require('./home')
const profile = require('./profile')

// NOTE: There's probably a more efficient way to 'use' all the files in a folder. Figure it out later.
router.use('/', authentication)
router.use('/', home)
router.use('/', profile)

module.exports = router
