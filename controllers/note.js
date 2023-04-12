const Note = require("../models/note");
const moment = require("moment");

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

let yearWeek = [];

for (let i = 0; i <= 52; i++) {
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
    // const week = moment(req.body.weekNumber).format("w");

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

      //   Loop through grouped emails
      const groupedNotesArray = Object.keys(groupedNotes)
        .map((key) => {
          return {
            date: key,

            notes: groupedNotes[key],
            // .sort((a, b) => {
            // console.log("groupedNotes[key]", groupedNotes[key]),
            // console.log("A:", a.weekNumber);
            // console.log("B", b.weekNumber);
            // return b.weekNumber - a.weekNumber;
            // if (a.weekNumber < b.weekNumber) {
            //   return 1;
            // }
            // if (a.weekNumber > b.weekNumber) {
            //   return -1;2
            // }
            // return 0;
            // }),
          };
        })
        .sort((a, b) => b.date - a.date);

      // groupedNotesArray.sort((a, b) => b.date - a.date);

      res.render("archive.ejs", {
        notes: notes,
        moment: moment,
        idNote: id,
        // weekNumber: moment(req.body.weekNumber).format("w"),
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
    console.log(req);

    const newNote = new Note({
      headerInput: req.body.headerInput,
      bodyInput: req.body.bodyInput,
      weekNumber: moment(req.body.weekNumber).format("w"),
      tagInput: req.body.tagInput
        .split(" ")
        .filter((substring) => substring !== ""),
    });

    console.log("tagInput", newNote);

    try {
      await newNote.save();

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
