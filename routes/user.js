const express = require('express');
var bodyParser = require('body-parser');


const router=express.Router();
router.use(bodyParser.json());

var cookieParser = require('cookie-parser');
const User = require("../controllers/User");

router.get('/login', (req, res) => {
    res.render('pages/login', { user: (req.session.user === undefined ? "" : req.session.user) });
});
router.get('/forgotPassword', (req, res) => {
    res.render('pages/forgotPassword');
});
router.get('/load', (req, res) => {
    res.render('pages/load',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
router.get('/resetPassword', (req, res) => {
    res.render('pages/resetPassword', { user: (req.session.user === undefined ? "" : req.session.user) });
});
router.get('/registr', (req, res) => {
    res.render('pages/registr', { user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.post('/login',User.LogIn);

 router.post('/registr',User.reg);
 router.post('/checkUN',User.checkUN);
//  router.post('/forgotPassword',User.sendEmail);

 router.post('/updatePassword', User.changePassword);
 router.post('/forgotPassword',User.forgotPassword);
 router.post('/resetPassword', User.resetPassword);
 
//check if logged in
 router.use((req,res, next)=>{
if(req.session.user!== undefined){
    next();
}
else{
    res.redirect('pages/404');
}
 });
 
 router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
 module.exports=router