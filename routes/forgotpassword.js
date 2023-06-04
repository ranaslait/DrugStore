// const express = require('express')
// const port = process.env.PORT || 3000
// const ejs = require('ejs')
// const path = require('path')
// const ejsMate = require('ejs-mate');
// const methodOverride = require('method-override')
// const flash = require("connect-flash")
// const session = require("express-session")
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const nodemailer = require('nodemailer')
// const multer = require('multer')
// const MongoDBStore = require('connect-mongo')(session);
// const randomstring = require('randomstring')

// const { cloudinary } = require("./cloudinary");
// const { storage } = require("./cloudinary");
// const upload = multer({storage})
// const ExpressError = require('./utils/ExpressError');
// const catchAsync = require('./utils/catchAsync');
// const Giveaway = require('./models/giveaway.js')
// const Lookingfor = require('./models/lookingfor')
// const Review = require("./models/review.js")
// const User = require("./models/user.js")
// const isVerified = async(req,res,next)=>{
//     if(req.user.isVerified != 1){
//       req.flash('error', 'Your Email ID must be verified to do that.');
//       return res.redirect('/index')
//     }
//     next();
//   }
// //for sending mail
// const sendVerificationMail = async(email,username,_id)=>{
//     const transporter = nodemailer.createTransport({
//       host:'smtp.gmail.com',
//       port:587,
//       secure:false,
//       requireTLS:true,
//       auth:{
//         user:process.env.NODEMAILER_MAIL,
//         pass:process.env.NODEMAILER_PASSWORD
//       }
//     })
//     const mailOptions={
//         from:process.env.NODEMAILER_MAIL,
//         to:email,
//         subject:'Give Away Verification Mail',
//         html:`<p>Hi ${username}, please click on the link to <a href = "giveaway.cyclic.app/index/verify?id=${_id}">Verify</a></p>`
//     }
//     transporter.sendMail(mailOptions,function(error,info){
//       if(error){
//         console.log(error)
//       }
//       else{
//         console.log('Email has been sent',info.response)
//       }
//     })
// }
// //send Reset password mail
// const sendResetPasswordMail = async(email,username,token)=>{
//   const transporter = nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//       user:process.env.NODEMAILER_MAIL,
//       pass:process.env.NODEMAILER_PASSWORD
//     }
//   })
//   const mailOptions={
//       from:process.env.NODEMAILER_MAIL,
//       to:email,
//       subject:'Give Away Reset Password',
//       html:`<p>Hi ${username}, please click on the link to <a href = "giveaway.cyclic.app/index/resetPassword?token=${token}">Reset Password</a></p>`
//   }
//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error)
//     }
//     else{
//       console.log('Email has been sent',info.response)
//     }
//   })
// }