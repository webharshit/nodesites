// Importing Node Modules
const express = require('express'),
    ejs = require('ejs'),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    MongoDbStore = require('connect-mongodb-session')(session),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv'),
    crsf = require('csurf'),
    crypto = require('crypto'),
    flash= require('flash')
    morgan = require('morgan');

// CONFIGRING ENVIREMENT
let error = '',
    success = ''
dotenv.config({path: './config.env'});
// mongoose.set('useFindAndModify', false);
// INPORTING OWN MODELS
const sites = require('./models/site');
const user = require('./models/user')
MONGO_URI = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// STARTING APP
const app = express();

// const usermodel = require('./models/user');
const store = new MongoDbStore({uri: MONGO_URI, collection: 'session'});

const crsfp = crsf()


// SETING HEADERS
app.set('views', 'views');
app.set('view engine', 'ejs');

// IMPORTING ROUTES
const mainroute = require('./routes/main.js');
const adminroute = require('./routes/admin.js');
const route404 = require('./routes/404.js');


// SETTING BODYPARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static('public'));
app.use(session({secret: 'y-site-for-nodeapp', resave: false, saveUninitialized: false, store: store}))
app.use(crsfp)
app.use(flash())
// app.use(morgan('dev'));

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }else{
  user.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      return next();
    })
    .catch(err => console.log(err));
}});




app.use((req, res, next) => {
  res.locals.isauth = req.session.isLoggedIn;
  res.locals.user= req.session.user
  res.locals.csrfToken = req.csrfToken();
  next();
});
// for Paging
// query.skip().limit()
// SETING PUBLIC FOLDER

// Setting Routes


// SETTING ROUTES
// app.route().get().post().patch().put().delete();

app.use(mainroute);
app.use(adminroute);
app.use(route404);

// CREATEING SERVER
const mongf = async () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        // useFindAndModify: true,
        useFindAndModify: false
    }).then((result) => {
        app.listen(process.env.PORT || 3000),
        () => {
            console.log(`Server Started on Port ${
                process.env.PORT
            }`)
        };
    }).catch((err) => console.log(err));
}; 
mongf()
