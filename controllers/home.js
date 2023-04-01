const Notes = require("../models/note");
const moment = require("moment");
const currentWeek = moment().format("w");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const notes = await Notes.find();

      res.render("index.ejs", {
        notes: notes,
        moment: moment,
        currentWeek: currentWeek,
      });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
};
