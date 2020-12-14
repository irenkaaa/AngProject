const express = require('express');
const authCheck = require('../middleware/auth-check');
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

router.get('/one/:id', (req, res) => {
  const id = req.params.id;
  
    User.findById(id).then((user) => {
      let role = true;
      if(user.roles.length === 0){
        role = false;
      }
      let response = {
        id,
        email: user.email,
        username: user. username,
        isAdmin: role,
      }
      return res.status(200).json({
        success: true,
        response
      })
    })
  
})



router.get('/allusers', (req,res)=>{
  User.find({})
    .then((users) => {
      return res.status(200).json(users)
    })
})

router.put('/promote/:id', authCheck, (req,res)=> {
  const id = req.params.id;
  
  if(req.user.roles.indexOf('Admin') > -1) {
      User
      .findById(id)
      .then((user) => {
          user.roles.push('Admin');
          user
            .save()
            .then((newUser) => {
              return res.status(200).json({
                success: true,
                message: 'User is promoted to Admin!',
                data : newUser
              })
            })
        })
        .catch(() => {
          return res.status(200).json({
            success: false,
            message: 'User does not exist!'
          })
        })
  } else {
      return res.status(200).json({
        success: false,
        message: 'Permission denied!'
      })
  }
})



router.delete('/delete/:id', authCheck, (req,res)=> {
  const id = req.params.id;
  if(req.user.roles.indexOf('Admin') > -1) {
      User
      .findById(id)
      .then((user) => {
          user
            .remove()
            .then(() => {
              return res.status(200).json({
                success: true,
                message: 'User is deleted!'
              })
            })
        })
        .catch(() => {
          return res.status(200).json({
            success: false,
            message: 'User does not exist!'
          })
        })
  } else {
      return res.status(200).json({
        success: false,
        message: 'Permission denied!'
      })
  }
})


module.exports = router
