const mongoose = require('mongoose')
const { Schema } = mongoose

const buildSchema = new Schema({
  name: String,
  profession: String,
  race: String,
  addedStrength: { type: Number, default: 0 },
  addedDexterity: { type: Number, default: 0 },
  addedIntelligence: { type: Number, default: 0 },
  addedEndurance: { type: Number, default: 0 },
  alignment: Number,
  pvpFlag: Boolean
}, {
  // We want createdAt and updatedAt to be generated automatically for us
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Build', buildSchema)
