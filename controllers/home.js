const Note = require("../models/note");
const moment = require("moment");
const currentWeek = moment().format("w");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const notes = await Note.find();

      res.render("index.ejs", {
        notes: notes,
        moment: moment,
        currentWeek: currentWeek,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  createNote: async (req, res) => {
    console.log(req);
    const newNote = new Note({
      headerInput: req.body.headerInput,
      bodyInput: req.body.bodyInput,
      weekNumber: req.body.weekNumber,
      tagInput: req.body.tagInput.split(" "),
    });
    try {
      await newNote.save();
      console.log(newNote);
      res.redirect("/");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/");
    }
  },
};
