const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);

router.get("/remove/:id", homeController.deleteNote);

router.post("/newNote", homeController.createNote);

module.exports = router;
