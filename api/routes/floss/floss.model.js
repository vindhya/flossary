const mongoose = require('mongoose');
const { Schema } = mongoose;

const flossSchema = new Schema({
  flossId: {
    type: String,
    unique: true,
    required: true
  },
  number: {
    type: String,
    unique: true,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  red: Number,
  green: Number,
  blue: Number
});

exports.model = mongoose.model('Floss', flossSchema, 'floss');
