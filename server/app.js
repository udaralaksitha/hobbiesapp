// app.js
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./conn"); // Import the MySQL connection instance
const router = require("./Routes/router");

const port = 8001;

// Middleware
app.use(express.json());
app.use(cors());

// Use the MySQL connection instance as middleware
app.use((req, res, next) => {
  req.mysql = conn;
  next();
});

app.use(router);

app.listen(port, () => {
  console.log("server starts at port no :" + port);
});
