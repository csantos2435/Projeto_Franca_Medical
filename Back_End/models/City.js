const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true  // Campo obigatório
  },
  estado: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('City', schema, 'city')