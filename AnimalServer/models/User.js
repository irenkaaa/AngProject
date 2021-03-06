const mongoose = require('mongoose');
const encryption = require('../util/encryption');


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: true
  },
  hashedPass: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  username: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  salt: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  roles: [{
    type: mongoose.Schema.Types.String
  }]
});

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
  }
});


let User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
  try {
    let users = await User.find();
    if (users.length > 0) return
    let salt = encryption.generateSalt()
    const hashedPass = encryption.generateHashedPassword(salt, '12345678');
    return User.create({
      username: 'Admin',
      email: 'admin@admin.com',
      salt,
      hashedPass,
      roles: ['Admin']
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = User;
