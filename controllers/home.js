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
  getIndex: async (req, res) => {
    try {
      const notes = await Note.find();

      const weekArray = [];
      notes.forEach((note) => {
        weekArray.push(note.weekNumber);
      });

      res.render("index.ejs", {
        yearWeek: yearWeek,
        currentWeek: currentWeek,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
};
