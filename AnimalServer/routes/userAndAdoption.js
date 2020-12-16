const express = require('express');
const authCheck = require('../middleware/auth-check');
const Animal = require('../models/Animal');
const User = require('../models/User');
const AdoptionReq = require('../models/AdoptionRequest');
const AdoptionRequest = require('../models/AdoptionRequest');

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

router.post('/create-adoption', authCheck, (req, res) => {
  console.log(req.body)
  const adoptionReq = req.body
  adoptionReq.userId = req.user._id;
  
  const validationResult = validateAdoptionForm(adoptionReq)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  AdoptionRequest.create(adoptionReq)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Adoption request created successfully.',
        adoptionReq
      })
    })
})

function validateAdoptionForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.fullName !== 'string') {
    isFormValid = false
    errors.fullName = "You should write Valid full name"
  }

  if (!payload || typeof payload.address !== 'string') {
    isFormValid = false
    errors.address = 'Address is not valid'
  }

  if (!payload || !payload.email) {
    isFormValid = false
    errors.email = 'Email error - check the Get User info'
  }

  
  if (!payload || typeof payload.phoneNumber !== 'number' || payload.phoneNumber.length > 12 ) {
    isFormValid = false
    errors.phoneNumber = 'phoneNumber format is number'
  }

  if (!payload /*|| typeof payload.birthDate !== 'date' */) {
    isFormValid = false
    errors.birthDate = 'Birth Date must be valid and user must be above 18.'
  }

  if (!payload || typeof payload.animalId !== 'string') {
    isFormValid = false
    errors.animalId = 'Animal id is missin or invalid'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}



module.exports = router
