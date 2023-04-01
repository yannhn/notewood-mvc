// install express
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 8003;

require("dotenv").config({ path: "./config/.env" });

connectDB();

// choose routes
const homeRoutes = require("./routes/home");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
