const Note = require("../models/note");
const moment = require("moment");
const currentWeek = moment().format("w");

module.exports = {
  getIndex: (req, res) => {
    let yearWeek = [];

    for (let i = 0; i <= 52; i++) {
      yearWeek.push(i);
    }

    console.log(yearWeek);
    console.log(Number(currentWeek));
    res.render("index.ejs", { yearWeek: yearWeek, currentWeek: currentWeek });
  },
};
