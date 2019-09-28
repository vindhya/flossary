const mongoose = require('mongoose');
const { Schema } = mongoose;

const flossListSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  flossList: {
    type: [ObjectId],
    default: undefined
  }
});

exports.model = mongoose.model('FlossList', flossListSchema);
