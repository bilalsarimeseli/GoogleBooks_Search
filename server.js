//Techonology needed to begin and start app
const express = require("express");
const app = express();
const routes = require("./routes")


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

