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
  //   tags: {
  //     type: [String],
  //   },
  createdAt: {
    type: Date,
    default: currentWeek,
  },
});

module.exports = mongoose.Model("note", noteSchema, "notes");
