const express = require('express');

// var session = require('express-session');

var bodyParser = require('body-parser');
const router=express.Router();
router.use(bodyParser.json());

var cookieParser = require('cookie-parser');
const User = require("../controllers/User");

router.get('/login', (req, res) => {
    res.render('pages/login', { user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get('/registr', (req, res) => {
    res.render('pages/registr', { user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.post('/login',User.LogIn);

 router.post('/registr',User.reg);
 router.post('/checkUN',User.checkUN);
//check if logged in
 router.use((req,res, next)=>{
if(req.session.user!== undefined){
    next();
}
else{
    res.render('pages/404',{err: 'You must login', user: (req.session.user===undefined ?"": req.session.user)})
}
 });
 
 router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

 module.exports=router