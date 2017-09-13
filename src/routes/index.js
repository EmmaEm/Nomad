const router = require('express').Router()
const authentication = require('./authentication')
const home = require('./home')

router.use('/', authentication)
router.use('/', home)

module.exports = router
