var mongoose = require('mongoose');

// Create the StorySchema 
var StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  access:{
    type: String,
    required: true
  },
  inspiration: {
    type: [String],
    required: false
  },
  text:{
    type: String,
    required: true
  },
  edit_user:{
    type: [String],
    required: false
  },
  edit_times:{
    type: Number,
    required: true 
  },
  text_length:{
    type: Number,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('story', StorySchema);
