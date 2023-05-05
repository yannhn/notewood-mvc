// install express
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");
const Note = require("./models/note");
require("dotenv").config({ path: "./config/.env" });

connectDB();

// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

// choose routes
const homeRoutes = require("./routes/home");
const noteRoutes = require("./routes/note");

//Use forms for put / delete
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/note", noteRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
