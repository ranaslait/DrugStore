//importing libs that we installed using npm
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
var ejs = require('ejs');
const app = express();
// var bodyParser=require('body-parser');
//const bcrypt =require("bcrypt"); //import the bcrypt for passwords"privacy"
// 
app.use(express.json());
// const uri = "mongodb+srv://ranaslait:4setDtjtBFb549Nx@cluster0.a3ua0nj.mongodb.net/";
// mongoose.connect(uri)
//   .then(result => app.listen(8081))
//   .catch(err => console.log(err));

mongoose.connect("mongodb+srv://user:1234@atlascluster.pecru0p.mongodb.net/project?retryWrites=true&w=majority")
   .then(result => app.listen(8081))
   .catch((e) => {
      console.log(e)
   })


const collection = require("./mongodb");
const usercollection = require('./mongodb');
app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.listen(8081);
app.use(express.urlencoded({ extended: true }));
app.post('/registr', async (req, res) => {
   // const data=new logincollection({
   //    name:req.body.name,
   //    email:req.body.email,
   //    password:req.body.password,
   //    phone:req.body.phone
   // })
   //await collection.insertMany([data])
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
   // const checking =await usercollection.findOne({email:req.body.email})
   // try{
   //    if(checking.email ===req.session.body.email && checking.password ===req.body.password){

   //    }
   //    else{
   //       await usercollection.insertMany([data])
   //    }
   // }
   // catch{
   //    res.send("wrong inputs")
   // }
   // res.status(201).render('pages/index',{
   //    naming:req.body.name
   // })


})
app.post('/login.ejs',async(rec,res)=>{
   try{
      const check=await usercollection.findOne({email:req.body.email})
      if(check.password === req.body.password){
         res.status(201).render('pages/index',{naming:`${req.body.email}+${req.body.password}`})
      }
      else{
         res.send("incorrect password")
      }
   }
   catch(e){
      res.send("wrong details")
   }
})
// app.listen(8081);//port that we listen on
//routes
app.post("/login", async function (req, res) {
   try {
      // check if the user exists
      const user = await user.findOne({ username: req.body.username });
      if (user) {
         //check if password matches
         const result = req.body.password === user.password;
         if (result) {
            res.status(201).render('pages/index', { naming: `${req.body.email}+${req.body.password}` })
         } else {
            res.status(400).json({ error: "password doesn't match" });
         }
      } else {
         res.status(400).json({ error: "User doesn't exist" });
      }
   } catch (error) {
      res.status(400).json({ error });
   }
});

app.get('/', function (req, res) {
   res.render('pages/index');
});

app.get('/about.ejs', (req, res) => {
   res.render('pages/about')
});
app.get('/articles.ejs', (req, res) => {
   res.render('pages/articles')
});
app.get('/blog.ejs', (req, res) => {
   res.render('pages/blog')
});
app.get('/cleaning.ejs', (req, res) => {
   res.render('pages/cleaning')
});
app.get('/hair.ejs', (req, res) => {
   res.render('pages/hair')
});
app.get('/loginform.ejs', (req, res) => {
   res.render('pages/loginform')
});
app.get('/login.ejs', (req, res) => {
   res.render('pages/login')
});
app.get('/registr.ejs', (req, res) => {
   res.render('pages/registr')
});
app.get('/makeup.ejs', (req, res) => {
   res.render('pages/makeup')
});
app.get('/medical.ejs', (req, res) => {
   res.render('pages/medical')
});
app.get('/medications.ejs', (req, res) => {
   res.render('pages/medications')
});
app.get('/motherbaby.ejs', (req, res) => {
   res.render('pages/motherbaby')
});
app.get('/perfume.ejs', (req, res) => {
   res.render('pages/perfume')
});
app.get('/personalcare.ejs', (req, res) => {
   res.render('pages/personalcare')
});
app.get('/productDetails.ejs', (req, res) => {
   res.render('pages/productDetails')
});
app.get('/skincare.ejs', (req, res) => {
   res.render('pages/skincare')
});
app.get('/vit.ejs', (req, res) => {
   res.render('pages/vit')
});
app.get('/checkout.ejs', (req, res) => {
   res.render('pages/checkout')
});
app.get('/index.ejs', (req, res) => {
   res.render('pages/index')
});
//end routes
