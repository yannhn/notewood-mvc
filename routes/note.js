const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.get("/:id", noteController.getNote);

router.put("/:id", noteController.editNote);

router.get("/remove/:id", noteController.deleteNote);

router.post("/newNote", noteController.createNote);

module.exports = router;
