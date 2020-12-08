const express = require('express')
const Animal = require('../models/Animal');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Animal.find({}).then((animals) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        animals: animals.length,
        users: users.length
      })
    })
  })
})

module.exports = router
