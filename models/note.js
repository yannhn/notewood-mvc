const mongoose = require("mongoose");
const moment = require("moment");
require("mongoose-moment")(mongoose);
const currentWeek = moment().format("w");

const noteSchema = new mongoose.Schema({
  headerInput: {
    type: String,
    required: true,
  },
  bodyInput: {
    type: String,
    required: true,
  },
  tagInput: {
    type: [String],
  },
  weekNumber: {
    type: Number,
    default: currentWeek,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("note", noteSchema, "notes");
