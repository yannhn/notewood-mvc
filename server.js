// install express
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 8020;
const methodOverride = require("method-override");
const Note = require("./models/note");
require("dotenv").config({ path: "./config/.env" });

connectDB();

// choose routes
const homeRoutes = require("./routes/home");
const noteRoutes = require("./routes/note");

//Use forms for put / delete
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/note", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
