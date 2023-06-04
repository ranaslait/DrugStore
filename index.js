//importing libs that we installed using npm
const express = require('express');
var session = require('express-session');
const fileUpload=require('express-fileupload');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var ejs = require('ejs');
const Fruite = require('./models/Search');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb+srv://user:1234@atlascluster.pecru0p.mongodb.net/project?retryWrites=true&w=majority")
   .then((result) => {
      
      app.listen(8081);
      console.log("connected to db");
   })
   .catch((e) => {
      console.log(e)
   })
   app.use(fileUpload());
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({ secret: 'Your_Secret_Key' }))
app.use(express.static('public'));
app.set('view engine', 'ejs');
const indexRoutes=require("./routes/index");
const userRoutes=require("./routes/user");
const adminRoutes=require("./routes/admin");
app.use("/",indexRoutes);
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use((req, res) => {
   res.status(404).render('pages/404', { user: (req.session.user === undefined ? "" : req.session.user) });
   
 });
 app.use('/api/users', userRoutes);

// Server Start

//  app.post('/getFruits',(req,res)=>{
// let payload = req.body.payload.trim();
// console.log(payload);
//  });
