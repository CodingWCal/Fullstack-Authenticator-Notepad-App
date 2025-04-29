const mongoose = require('mongoose')
const NoteSchema = new mongoose.Schema({
  userId:   { type: String, required: true },
  title:    { type: String, required: true },
  content:  { type: String, required: true },
  created:  { type: Date,   default: Date.now }
})
module.exports = mongoose.model('Note', NoteSchema)
