
//Importing Node Modules 
const express = require('express'),
ejs = require('ejs'),
mongoose = require('mongoose'),
session = require('express-session'),
MongoDbStore = require('connect-mongodb-session')(session);
bodyParser= require('body-parser')
// session = require('express-session');






// Importing Other Modules
const app = express()







//Setting Hendler Of Site

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public',express.static('public'))


//Setting Database

MONGO_URI='mongodb+srv://harshit:p@mysite.podit.mongodb.net/mysites?retryWrites=true&w=majority'



// Setting Other Veriables



// Setting Routes
const mainroute= require('./routes/main.js')
// const adminroute= require('./routes/admin.js')
const route404= require('./routes/404.js')

app.use(mainroute);
// app.use(adminroute);
app.use(route404);
// app.use('/',(req,res)=>{
//     res.status(404).render('404');
// });








//Starting App On Port

app.listen(80, () => {
    console.log(`Server started on 80`);
});