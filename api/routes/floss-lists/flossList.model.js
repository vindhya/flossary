const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const flossListSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  flossList: {
    type: [ObjectId],
    default: []
  }
});

exports.model = mongoose.model('FlossList', flossListSchema);
