const express = require("express");
const fs = require("fs");
const path = require("path");

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// routes file
require("./routes/routes")(app);

// Setup listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

app.use(express.static("public"));
