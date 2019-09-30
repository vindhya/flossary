const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const flossListSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
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
  public: {
    type: Boolean,
    required: true,
    default: false
  },
  flossList: [
    {
      type: ObjectId,
      ref: 'Floss'
    }
  ]
});

exports.model = mongoose.model('FlossList', flossListSchema);
