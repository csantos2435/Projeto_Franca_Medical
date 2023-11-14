const User = require('../models User')

const controller = {}   

controller.create = async (req, res) => {
  try {
    await User.create(req.body)

    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.retrieveAll = async (req, res) => {
  try {
    const result = await User.find()
    res.send(result)
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.retrieveOne = async(req, res) => {
  try {
    const result = await User.findById(req.params.id)

    if(result) {
      res.send(result)
    }
    else {
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.update = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body)
    if(result) {
      res.status(204).end()
    }
    else {
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.delete = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id)
    if(result) {
      res.status(204).end()
    }
    else {
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

module.exports = controller
