const mongoose = require("mongoose");

// The properties out of the following setups will be ignored.
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: Boolean,
  default: false,
});

// The first argument is the singular name of the collection your model for.
module.exports = mongoose.model("Task", TaskSchema);
