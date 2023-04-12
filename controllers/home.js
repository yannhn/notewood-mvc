const Note = require("../models/note");
const moment = require("moment");

// From 2.12.0 onward
moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

const currentWeek = moment().format("w");

module.exports = {
  getIndex: async (req, res) => {
    let yearWeek = [];

    for (let i = 0; i <= 52; i++) {
      yearWeek.push(i);
    }
    try {
      const notes = await Note.find();

      console.log("notes:", notes);

      const countCharacters = {};
      const weekArray = [];
      notes.forEach((note) => {
        weekArray.push(note.weekNumber);
      });

      console.log(weekArray);
      weekArray.forEach((week) => {
        if (countCharacters[week]) {
          countCharacters[week]++;
        } else {
          countCharacters[week] = 1;
        }
      });

      console.log("countCharacters", countCharacters);

      res.render("index.ejs", {
        yearWeek: yearWeek,
        currentWeek: currentWeek,
        // countCharacters: countCharacters,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  // getHeader: async (req, res) => {
  //   let yearWeek = [];

  //   for (let i = 0; i <= 52; i++) {
  //     yearWeek.push(i);
  //   }
  //   try {
  //     const notes = await Note.find();

  //     console.log("notes:", notes);

  //     const countCharacters = {};
  //     const weekArray = [];
  //     notes.forEach((note) => {
  //       weekArray.push(note.weekNumber);
  //     });

  //     console.log(weekArray);
  //     weekArray.forEach((week) => {
  //       if (countCharacters[week]) {
  //         countCharacters[week]++;
  //       } else {
  //         countCharacters[week] = 1;
  //       }
  //     });

  //     console.log("countCharacters", countCharacters);

  //     res.render("partials/header.ejs", {
  //       yearWeek: yearWeek,
  //       currentWeek: currentWeek,
  //       // countCharacters: countCharacters,
  //     });
  //   } catch (err) {
  //     if (err) return res.status(500).send(err);
  //   }
  // },
};
