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



// Importing Other Modules
MONGO_URI = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
const app = express()

// const store = new MongoDbStore({
//     uri: MONGO_URI,
//     collection: 'mysite'
// })
app.set('views', 'views');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public', express.static('public'))
//Setting Hendler Of Site

// const user=usermodel.create({
//     email:'web.harshit@gmail.com',
//     password: 'abcd',
//     mobileno: '9896894671'
// })
// //Setting Database
// app.use(
//     session({
//         secret: 'my secret',
//         resave: false,
//         saveUninitialized: false,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         store: store
//     })
// );




// Setting Other Veriables
// app.use((req, res, next) => {
//     if (!req.session.user) {
//         return next();
//     }
//     User.findById(req.session.user._id)
//         .then(user => {
//             req.user = user;
//             next();
//         })
//         .catch(err => console.log(err));
// });


// app.use((req, res, next) => {
//     res.locals.isAuthenticated = req.session.isLoggedIn;
//     // res.locals.csrfToken = req.csrfToken();
//     next();
// });



// Setting Routes
const mainroute = require('./routes/main.js')
// const adminroute= require('./routes/admin.js')
const route404 = require('./routes/404.js');
const { eventNames } = require('./models/user');

app.use(mainroute);
// app.use(adminroute);
app.use(route404);
// app.use('/',(req,res)=>{
//     res.status(404).render('404');
// });

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
