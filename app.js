//Importing Node Modules 
const express = require('express'),
    ejs = require('ejs'),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    MongoDbStore = require('connect-mongodb-session')(session),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv');



dotenv.config({ path: './config.env' });
const usermodel = require('./models/user')
const sitemodel = require('./models/site')
MONGO_URI = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
const app = express()
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public', express.static('public'))




// Setting Routes
const mainroute = require('./routes/main.js')
const adminroute= require('./routes/admin.js')
const route404 = require('./routes/404.js');
const { eventNames } = require('./models/user');

app.use(mainroute);
app.use(adminroute);
app.use(route404);




// CREATE SERVER
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(result => {
        app.listen(process.env.PORT)
    })
    .catch(err => console.log(err))
