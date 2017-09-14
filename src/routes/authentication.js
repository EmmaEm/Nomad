const router = require('express').Router()

router.get('/login', (req, res) => {
  res.render('authentication/login')
})

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

module.exports = router
