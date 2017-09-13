const router = require('express').Router()

router.get('/profile/:username', (req, res) => {
  res.render('profile')
})


module.exports = router
