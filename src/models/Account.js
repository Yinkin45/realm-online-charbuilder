const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  emailAddress: String,
  mobileNumber: String
}, {
  // We want createdAt and updatedAt to be generated automatically for us
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Account', accountSchema)
