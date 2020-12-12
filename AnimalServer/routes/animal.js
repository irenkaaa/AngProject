const express = require('express')
const authCheck = require('../middleware/auth-check');
const Animal = require('../models/Animal');

const router = new express.Router()

function validateAnimalForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

 
  payload.age = parseInt(payload.age)
  

  if (!payload || typeof payload.breed !== 'string') {
    isFormValid = false
    errors.breed = "You should write Valid breed name or 'no breed'"
  }

  if (!payload || typeof payload.sex !== 'string') {
    isFormValid = false
    errors.sex = 'Sex must be "f" or "m"'
  }

  if (!payload || !payload.date) {
    isFormValid = false
    errors.date = 'Date must be correct.'
  }

  
  if (!payload || typeof payload.age !== 'number' || payload.age.length > 3 || payload.age < 0) {
    isFormValid = false
    errors.age = 'Age format is number'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
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

router.post('/create', authCheck, (req, res) => {
  const animal = req.body
  animal.creator = req.user._id
  const validationResult = validateAnimalForm(animal)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Animal.create(animal)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Animal added successfully.',
        animal
      })
    })
})

router.get('/all' ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Animal.find({})
    .then((animal) => {
      return res.status(200).json(animal)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Animal.findById(id)
    .then((animal) => {
      if (!animal) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: animal.title,
        breed: animal.breed,
        sex: animal.sex,
        date: animal.date,
        description: animal.description,
        age: animal.age,
        image: animal.image,
      }


      res.status(200).json(response)
    })
})


/*router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Animal.find({creator: user})
    .then((animal) => {
      return res.status(200).json(animal)
    })
})*/

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Animal.findById(id)
    .then((animal) => {
      if (!animal) {
        return res.status(200).json({
          success: false,
          message: 'Animal does not exists!'
        })
      }

      if ((animal.creator.toString() != user && !req.user.roles.includes("Admin"))) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Animal.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Animal deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const animal = req.body;

  if (!animal) {
    return res.status(404).json({
      success: false,
      message: 'Animal does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateAnimalForm(animal)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Animal.findByIdAndUpdate(id, animal)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Animal edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Animal.findById(id)
    .then(animal => {
      if (!animal) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: animal.title,
        breed: animal.breed,
        sex: animal.sex,
        date: animal.date,
        description: animal.description,
        age: animal.age,
        image: animal.image,
      }

      res.status(200).json(response)
    })
})

module.exports = router
