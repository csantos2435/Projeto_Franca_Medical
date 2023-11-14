const mongoose = require('mongoose')

const schema = mongoose.Schema({
  user: {
    type: String,
    required: true  // Campo obigatório
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', schema, 'user')