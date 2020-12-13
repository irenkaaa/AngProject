const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const encryption = require('../util/encryption');
const jwt = require('jsonwebtoken')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const salt = encryption.generateSalt();
  const hashedPass = encryption.generateHashedPassword(salt, password);
  User.create({email, hashedPass, salt, username: req.body.username}).then((newUser) => {
    
    const payload = {
      sub: newUser.id
    }

    // create a token string
    const token = jwt.sign(payload, 's0m3 r4nd0m str1ng');
    const isAdmin = newUser.roles.indexOf('Admin') != -1;
    const data = {
      username: newUser.username,
      isAdmin
    }

    return done(null, token, data)
  })
})
