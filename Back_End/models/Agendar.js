const mongoose = require('mongoose')

const schema = mongoose.Schema({
  id_paciente: {
    type: String,
    required: true  // Campo obigatório
  },
  id_medico: {
    type: String,
    required: false
  },
  data: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
})

/*
  Parâmetros de mongoose.model:
  1º: nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
  2º: relação de campos do esquema (constante schema)
  3º: nome da collection no banco de dados (convenção: mesmo nome do model, mas com
      letra minúscula e no plural)
*/
module.exports = mongoose.model('Agendar', schema, 'agendar')