//importing libs that we installed using npm
const express = require('express');
const User = require("../DrugStore/mongodb");
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require("bcrypt");
const crypto = require("crypto");
var ejs = require('ejs');
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://user:1234@atlascluster.pecru0p.mongodb.net/project?retryWrites=true&w=majority")
   .then((result) => {
      app.listen(8081);
      console.log("connected to db");
   })
   .catch((e) => {
      console.log(e)
   })


const collection = require("./mongodb");
const usercollection = require('./mongodb');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
//sign up and save data in DB
app.post('/registr', async (req, res) => {
   console.log(req.body)
   const data = new usercollection({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone
   })
   data.save()
      .then(result => {
         res.redirect('/');//awdeh 3la el index
      })
      .catch(err => {
         console.log(err);
      })

})
app.post('/login', async (req, res) => {
   try {
      console.log(req.body)
      const check = await usercollection.findOne({ email: req.body.email })

      if (check.password === req.body.password) {
         res.redirect('/');//awdeh 3la el index

      }

      //awdeh 3la el index }
      else {
         res.send("incorrect password")
      }
   }
   catch (e) {
      res.send("wrong details")
   }
})
app.post('/new_pass', async (req, res) => {
   try{
       //find a document with such email address
       const user = await User.findOne({email : req.body.email})
       //check if user object is not empty
       if(user){
           //generate hash
           const hash = new User(user).generatePasswordResetHash()
           //generate a password reset link
           const resetLink = `http://localhost:8081/reset?email=${user.email}?&hash=${hash}`
           //return reset link
           return res.status(200).json({
               resetLink
           })
           //remember to send a mail to the user
       }else{
           //respond with an invalid email
           return res.status(400).json({
               message : "Email Address is invalid"
           })
       } 
   }catch(err){
       console.log(err)
       return res.status(500).json({
           message : "Internal server error"
       })
   }
})
app.post('/reset', async (req, res) => {
   try {
       //check for email and hash in query parameter
       if (req.query && req.query.email && req.query.hash) {
           //find user with suh email address
           const user = await User.findOne({ email: req.query.email })
           //check if user object is not empty
           if (user) {
               //now check if hash is valid
               if (new User(user).verifyPasswordResetHash(req.query.hash)) {
                   //save email to session
                   req.session.email = req.query.email;
                   //issue a password reset form
                   return res.render(__dirname + '/views/pages/new_pass')
               } else {
                   return res.status(400).json({
                       message: "You have provided an invalid reset link"
                   })
               }
           } else {
               return res.status(400).json({
                   message: "You have provided an invalid reset link"
               })
           }
       } else {
           //if there are no query parameters, serve the normal request form
           return res.render(__dirname + '/views/pages/reset')
       }
   } catch (err) {
       console.log(err)
       return res.status(500).json({
           message: "Internal server error"
       })
   }
})
app.get('/', function (req, res) {
   res.render('pages/index');
});

app.get('/about', (req, res) => {
   res.render('pages/about')
});
app.get('/articles', (req, res) => {
   res.render('pages/articles')
});
app.get('/blog', (req, res) => {
   res.render('pages/blog')
});
app.get('/cart', (req, res) => {
   res.render('pages/cart')
});
app.get('/cleaning', (req, res) => {
   res.render('pages/cleaning')
});
app.get('/hair', (req, res) => {
   res.render('pages/hair')
});
app.get('/login', (req, res) => {
   res.render('pages/login')
});
app.get('/registr', (req, res) => {
   res.render('pages/registr')
});
app.get('/reset', (req, res) => {
   res.render('pages/reset')
});
app.get('/admin', (req, res) => {
   res.render('pages/admin')
});
app.get('/footer', (req, res) => {
   res.render('pages/footer')
});
app.get('/new_pass', (req, res) => {
   res.render('pages/new_pass')
});
app.get('/makeup', (req, res) => {
   res.render('pages/makeup')
});
app.get('/medical', (req, res) => {
   res.render('pages/medical')
});
app.get('/medications', (req, res) => {
   res.render('pages/medications')
});
app.get('/motherbaby', (req, res) => {
   res.render('pages/motherbaby')
});
app.get('/perfume', (req, res) => {
   res.render('pages/perfume')
});
app.get('/personalcare', (req, res) => {
   res.render('pages/personalcare')
});
app.get('/productDetails', (req, res) => {
   res.render('pages/productDetails')
});
app.get('/skincare', (req, res) => {
   res.render('pages/skincare')
});
app.get('/vit', (req, res) => {
   res.render('pages/vit')
});
app.get('/checkout', (req, res) => {
   res.render('pages/checkout')
});
app.get('/index', (req, res) => {
   res.render('pages/index')
});
app.get('/header', (req, res) => {
   res.render('pages/header');
});
//end routes
