const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Reaction schema
const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => createdAtVal.toISOString() // Format the timestamp
    }
  },
  {
    _id: false, // Prevent automatic addition of `_id` field for nested documents
    toJSON: {
      getters: true // Include getters in JSON output
    },
    toObject: {
      getters: true // Include getters in plain object output
    }
  }
);

// Create the Reaction model using the schema
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;