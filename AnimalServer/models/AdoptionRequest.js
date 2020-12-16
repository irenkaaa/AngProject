const mongoose = require('mongoose');

const adoptionRequestSchema = new mongoose.Schema({

    fullName: {
        type: mongoose.Schema.Types.String,
        required:  true
    },
    address: {
        type: mongoose.Schema.Types.String,
        required:  true
    },
    email: {
        type: mongoose.Schema.Types.String,
    },
    phoneNumber: {
        type: mongoose.Schema.Types.Number,
        required:  true
    },
    birthDate: {
        type: mongoose.Schema.Types.Date,
        required:  true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    animalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal'
    },

});

const AdoptionRequest = mongoose.model('AdoptionRequest', adoptionRequestSchema);

module.exports = AdoptionRequest;
