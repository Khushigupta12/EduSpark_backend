const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userdata = require("./routes/userdata");
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.get("/", (req,res) => {
  res.send("API is running...");
});
app.use("/api/v1", userdata);
app.use("/api/v1/login", userdata);

module.exports = app;
