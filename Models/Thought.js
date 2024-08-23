const mongoose = require('mongoose');
const Reaction = require('./Reaction');
const { Schema } = mongoose;


// Define the Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => createdAtVal.toISOString() // Format the timestamp
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Reaction"
        }
    ] // Array of nested documents
  },
  {
    toJSON: {
      getters: true, // Apply getters to JSON output
      virtuals: true
    },
    toObject: {
      getters: true, // Apply getters to plain object output
      virtuals: true
    }
  }
);

// Create the Thought model using the schema
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;