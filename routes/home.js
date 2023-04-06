const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const noteController = require("../controllers/note");

router.get("/", homeController.getIndex);

router.get("/currentWeek", noteController.getCurrentWeek);

router.get("/archive", noteController.getArchive);

module.exports = router;
