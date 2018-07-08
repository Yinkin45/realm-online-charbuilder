const mongoose = require('mongoose')
const { Schema } = mongoose

const templateSchema = new Schema({
  name: String,
  profession: String,
  race: String,
  baseStrength: Number,
  baseDexterity: Number,
  baseIntelligence: Number,
  baseEndurance: Number,
  pointsToSpend: { type: Number, default: 10 }
}, {
  // We want createdAt and updatedAt to be generated automatically for us
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Template', templateSchema)
