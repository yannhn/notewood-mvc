const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);

router.put("/:id", homeController.editNote);

router.get("/remove/:id", homeController.deleteNote);

router.post("/update/:id", homeController.updateNote);

router.post("/newNote", homeController.createNote);

module.exports = router;
