// install express
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 8001;

require("dotenv").config({ path: "./config/.env" });

connectDB();

// choose routes
const homeRoutes = require("./routes/home");

app.set("view engine", "ejs");

app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
