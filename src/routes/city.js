const router = require('express').Router()

router.get('/cities/:city', (req, res) => {
  res.render('city')
})


module.exports = router
