const Note = require("../models/note");
const moment = require("moment");
const currentWeek = moment().format("w");

module.exports = {
  getCurrentWeek: async (req, res) => {
    const id = req.params.id;
    try {
      const notes = await Note.find();
      res.render("currentWeek.ejs", {
        notes: notes,
        moment: moment,
        currentWeek: currentWeek,
        idNote: id,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  getNote: async (req, res) => {
    const id = req.params.id;
    try {
      const notes = await Note.findById(id);
      res.render("note.ejs", { notes: notes });
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
      res.redirect("/currentWeek");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/");
    }
  },
  // getEdit: async (req, res) => {
  //   const id = req.params.id;
  //   console.log(id);

  //   try {
  //     const notes = await Note.find();
  //     res.render("index.ejs", { notes: notes, idNote: id });
  //   } catch (err) {
  //     if (err) return res.status(500).send(err);
  //   }
  // },

  editNote: async (req, res) => {
    const id = req.params.id;
    console.log("req.", req);
    try {
      const result = await Note.findByIdAndUpdate(id, {
        headerInput: req.body.headerInput,
        bodyInput: req.body.bodyInput,
        // weekNumber: req.body.weekNumber,
        tagInput: req.body.tagInput.split(" "),
      });
      console.log("res:", result);
      res.redirect("back");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("back");
    }
  },
  updateNote: async (req, res) => {
    const id = req.params.id;
    try {
      await ItemList.findByIdAndUpdate(id, {
        headerInput: req.body.headerInput,
        bodyInput: req.body.bodyInput,
        weekNumber: req.body.weekNumber,
        tagInput: req.body.tagInput.split(" "),
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("back");
    }
  },
  deleteNote: async (req, res) => {
    const id = req.params.id;
    try {
      await Note.findByIdAndDelete(id);
      res.redirect("/currentWeek");
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
};
