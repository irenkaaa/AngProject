const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  breed: {
    type: mongoose.Schema.Types.String,
    required: true,
    default: 'No breed'
  },

  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  sex: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  age: {
    type: mongoose.Schema.Types.String,
    required: false
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true,
    default: Date.now()
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  adoptionRequests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
