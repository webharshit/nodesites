//Importing Node Modules
const express = require("express"),
  ejs = require("ejs"),
  mongodb = require("mongodb"),
  mongoose = require("mongoose"),
  session = require("express-session"),
  MongoDbStore = require("connect-mongodb-session")(session),
  bodyParser = require("body-parser"),
  dotenv = require("dotenv");

// CONFIGRING ENVIREMENT
dotenv.config({ path: "./config.env" });

MONGO_URI = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// INPORTING OWN MODELS
const usermodel = require("./models/user");
const sitemodel = require("./models/site");

// STARTING APP
const app = express();

// SETING HEADERS
app.set("views", "views");
app.set("view engine", "ejs");

// SETTING BODYPARSER
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//SETING PUBLIC FOLDER
app.use("/public", express.static("public"));

// Setting Routes

// IMPORTING ROUTES
const mainroute = require("./routes/main.js");
const adminroute = require("./routes/admin.js");
const route404 = require("./routes/404.js");

//SETTING ROUTES
app.use(mainroute);
app.use(adminroute);
app.use(route404);

// CREATEING SERVER
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((result) => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
