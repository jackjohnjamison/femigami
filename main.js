const express = require("express");
const path = require("path");

//*// In case I need basic auth again
const basicAuth = require("express-basic-auth");

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser"); // For parsing the body of API requests

const nunjucks = require("nunjucks");

const main = express();

main.use(bodyParser.json()); // support json encoded bodies
main.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// configute Nunjucks with 'views' as templates directory
nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: main,
});

main.use(logger("dev"));
main.use(express.json());
main.use(express.urlencoded({ extended: false }));
main.use(cookieParser());
main.use(express.static(path.join(__dirname, "assets"))); // Sets root for static files

// Adding routes
const indexRouter = require("./routes/index");

main.use("/", indexRouter);

module.exports = main;
