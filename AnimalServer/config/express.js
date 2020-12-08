const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localRegisterStrategy = require('../passport/local-register')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const animalRoutes = require('../routes/animal')
const statsRoutes = require('../routes/stats')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-register', localRegisterStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/animal', animalRoutes)
  app.use('/stats', statsRoutes)
}