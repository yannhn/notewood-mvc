const Note = require("../models/note");
const moment = require("moment");

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

let yearWeek = [];

for (let i = 1; i <= 52; i++) {
  yearWeek.push(i);
}

const currentWeek = moment().format("w");

module.exports = {
  getCurrentWeek: async (req, res) => {
    const id = req.params.id;
    try {
      const notes = await Note.find();

      const tagArray = [];
      notes.forEach((note) => {
        if (note.weekNumber === Number(currentWeek)) {
          tagArray.push(note.tagInput);
        }
      });

      const fullTagsArray = [...new Set(tagArray.flat())];

      res.render("currentWeek.ejs", {
        notes: notes,
        moment: moment,
        currentWeek: currentWeek,
        idNote: id,
        fullTagsArray,
        yearWeek,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },

  getTargetWeek: async (req, res) => {
    const id = req.params.id;
    const week = req.params.week;

    try {
      const notes = await Note.find();

      const tagArray = [];
      notes.forEach((note) => {
        if (note.weekNumber === Number(week)) {
          tagArray.push(note.tagInput);
        }
      });

      const fullTagsArray = [...new Set(tagArray.flat())];

      res.render("targetWeek.ejs", {
        notes: notes,
        moment: moment,
        idNote: id,
        targetWeek: moment(req.body.weekNumber).format("w"),
        week: week,
        fullTagsArray,
        yearWeek,
        currentWeek,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },

  getArchive: async (req, res) => {
    const id = req.params.id;
    try {
      const notes = await Note.find();

      const groupedNotes = notes.reduce((acc, curr) => {
        const date = curr.weekNumber;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(curr);
        return acc;
      }, {});

      const groupedNotesArray = Object.keys(groupedNotes)
        .map((key) => {
          return {
            date: key,
            notes: groupedNotes[key],
          };
        })
        .sort((a, b) => b.date - a.date);

      res.render("archive.ejs", {
        notes: notes,
        moment: moment,
        idNote: id,
        groupedNotesArray,
        yearWeek,
        currentWeek,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  getNote: async (req, res) => {
    const id = req.params.id;
    try {
      const notes = await Note.findById(id);
      res.render("note.ejs", { notes: notes, yearWeek, currentWeek });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  createNote: async (req, res) => {
    const newNote = new Note({
      headerInput: req.body.headerInput,
      bodyInput: req.body.bodyInput,
      weekNumber: moment(req.body.weekNumber).format("w"),
      tagInput: req.body.tagInput
        .split(" ")
        .filter((substring) => substring !== ""),
    });

    try {
      await newNote.save();

      res.redirect("/currentWeek");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/");
    }
  },

  editNote: async (req, res) => {
    const id = req.params.id;

    try {
      const result = await Note.findByIdAndUpdate(id, {
        headerInput: req.body.headerInput,
        bodyInput: req.body.bodyInput,
        tagInput: req.body.tagInput.split(" "),
      });

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
      res.redirect("back");
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
};
