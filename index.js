const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const connectDB = require("./database/database");
require("dotenv").config();

app.use(bodyParser.json());

console.log("Connecting to database...");

connectDB();

// app.use("/api/v1", require("./routes/authRoutes"));

// app.use("/api/v1", require("./routes/userRoutes"));

// app.use("/api/v1", require("./routes/resRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
