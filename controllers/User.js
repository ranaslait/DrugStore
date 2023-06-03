const User = require("../models/users");
const path = require('path');
const bcrypt = require('bcrypt');
const salt = 10;
const reg= async (req, res) => {

   const body = req.body;

   if (!(body.name && body.email && body.password && body.phone && body.type)) {
      return res.redirect('/');
   }

   // creating a new mongoose doc from user data
   const user = new User(body);
   // generate salt to hash password
   const salt = await bcrypt.genSalt(10);
   // now we set the user password to hashed password
   user.password = await bcrypt.hash(user.password, salt);
   user.save().then((doc) => res.redirect('/login'));
};

const checkUN = (req, res) => {
    var query = { name: req.body.name };
    User.find(query)
        .then(result => {
            if (result.length > 0) {
                res.send('taken');
            }
            else {
                res.send('available');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

const LogIn= async (req, res) => {
    try {
       const body = req.body;
       const user = await User.findOne({ email: body.email });
       if (user) {
          // Check the user password with the hashed password stored in the database
          const validPassword = await bcrypt.compare(body.password, user.password);
          if (validPassword) {
             console.log("logged in");
             req.session.user=user;
             res.redirect('/');
          } else {
             req.session.error = 'Wrong Password';
            //  req.session.user = req.session.user || "";
             res.redirect('/404');
          }
       } else {
          req.session.error = 'User not found';
         //  req.session.user = req.session.user || "";
          res.redirect('/404');
       }
    } catch (err) {
       console.log(err);
       res.redirect('pages/404');
    }
 };

 module.exports={
    reg,
    checkUN,
    LogIn
 };


//jwt = require('jsonwebtoken');
// _ = require('lodash'),
// async = require('async'),
// hbs = require('nodemailer-express-handlebars');
// var email2 ='ddose0725@gmail.com' ;
// var pass2 = 'dose123456789';
// nodemailer = require('nodemailer');

//  exports.forgot_pass = async function (req, res) {
//    try {
//      const { email } = req.body;
//      const user = await User.findOne({ email });
//      if (!user) {
//        return res.status(400).send({ message: 'Sorry Email does not Exist!' });
//      }
//      const transporter = nodemailer.createTransport({
//        service: 'gmail',
//        host: 'smtp.gmail.com',
//        port: '587',
//        auth: {
//          user: '**************@gmail.com',
//          pass: '***********',
//        },
//        secureConnection: 'false',
//        tls: {
//          ciphers: 'SSLv3',
//          rejectUnauthorized: false,
//        },
//      });
//      const mailOptions = {
//        from: 'ranaasslait@gmail.com',
//        to: email,
//        subject: 'Please Reset your Password',
//        html: '<h3>Dear <%user.name%></h3><p>You have requested to Reset your password. To Reset your password Successfully, Follow the Link bellow to Reset it</p><p>Click <a href="https://**********/user/resetPassword.jsp">https://onepercentsoft.oxygen.com/user/resetPassword.jsp</a></p><p>This Email is subject to mandatory instruction.</p><p>Regards,</p><p>Online Service</p>',
//      };
 
//      transporter.sendMail(mailOptions, function (error, info) {
//        if (error) throw error;
//        return res.send({ error: false, data: info, message: 'OK' });
//      });
//    } catch (err) {
//      res.status(500).send({ message: err });
//    }
//  };
// app.post('/new_pass', async (req, res) => {
//    try {
//       //find a document with such email address
//       const user = await User.findOne({ email: req.body.email })
//       //check if user object is not empty
//       if (user) {
//          //generate hash
//          const hash = new User(user).generatePasswordResetHash()
//          //generate a password reset link
//          const resetLink = `http://localhost:8081/reset?email=${user.email}?&hash=${hash}`
//          //return reset link
//          return res.status(200).json({
//             resetLink
//          })
//          //remember to send a mail to the user
//       } else {
//          //respond with an invalid email
//          return res.status(400).json({
//             message: "Email Address is invalid"
//          })
//       }
//    } catch (err) {
//       console.log(err)
//       return res.status(500).json({
//          message: "Internal server error"
//       })
//    }
// })
// app.post('/reset', async (req, res) => {
//    try {
//       //check for email and hash in query parameter
//       if (req.query && req.query.email && req.query.hash) {
//          //find user with suh email address
//          const user = await User.findOne({ email: req.query.email })
//          //check if user object is not empty
//          if (user) {
//             //now check if hash is valid
//             if (new User(user).verifyPasswordResetHash(req.query.hash)) {
//                //save email to session
//                req.session.email = req.query.email;
//                //issue a password reset form
//                return res.render(__dirname + '/views/pages/new_pass')
//             } else {
//                return res.status(400).json({
//                   message: "You have provided an invalid reset link"
//                })
//             }
//          } else {
//             return res.status(400).json({
//                message: "You have provided an invalid reset link"
//             })
//          }
//       } else {
//          //if there are no query parameters, serve the normal request form
//          return res.render(__dirname + '/views/pages/reset')
//       }
//    } catch (err) {
//       console.log(err)
//       return res.status(500).json({
//          message: "Internal server error"
//       })
//    }
// })

// var smtpTransport = nodemailer.createTransport({
//    auth: {
//      user: email2,
//      pass: pass2
//    }
//  });
 
 
//  var handlebarsOptions = {
//    viewEngine: 'handlebars',
//    viewPath: path.resolve('./api/templates/'),
//    extName: '.ejs'
//  };
 
//  smtpTransport.use('compile', hbs(handlebarsOptions));
 
 
// exports.forgot_password = function(req, res) {
//    async.waterfall([
//      function(done) {
//        User.findOne({
//          email: req.body.email
//        }).exec(function(err, user) {
//          if (user) {
//            done(err, user);
//          } else {
//            done('User not found.');
//          }
//        });
//      },
//      function(user, done) {
//        // create the random token
//        crypto.randomBytes(20, function(err, buffer) {
//          var token = buffer.toString('hex');
//          done(err, user, token);
//        });
//      },
//      function(user, token, done) {
//        User.findByIdAndUpdate({ _id: user._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_user) {
//          done(err, token, new_user);
//        });
//      },
//      function(token, user, done) {
//        var data = {
//          to: user.email,
//          from: email2,
//          template: 'forgot-password-email',
//          subject: 'Password help has arrived!',
//          context: {
//            url: 'http://localhost:8081/auth/reset_password?token=' + token,
//            name: user.fullName.split(' ')[0]
//          }
//        };
 
//        smtpTransport.sendMail(data, function(err) {
//          if (!err) {
//            return res.json({ message: 'Kindly check your email for further instructions' });
//          } else {
//            return done(err);
//          }
//        });
//      }
//    ], function(err) {
//      return res.status(422).json({ message: err });
//    });
//  };
 
 /**
  * Reset password
  */
//  exports.reset_password = function(req, res, next) {
//    User.findOne({
//      reset_password_token: req.body.token,
//      reset_password_expires: {
//        $gt: Date.now()
//      }
//    }).exec(function(err, user) {
//      if (!err && user) {
//        if (req.body.newPassword === req.body.verifyPassword) {
//          user.hash_password = bcrypt.hashSync(req.body.newPassword, 10);
//          user.reset_password_token = undefined;
//          user.reset_password_expires = undefined;
//          user.save(function(err) {
//            if (err) {
//              return res.status(422).send({
//                message: err
//              });
//            } else {
//              var data = {
//                to: user.email,
//                from: email2,
//                template: 'reset-password-email',
//                subject: 'Password Reset Confirmation',
//                context: {
//                  name: user.fullName.split(' ')[0]
//                }
//              };
 
//              smtpTransport.sendMail(data, function(err) {
//                if (!err) {
//                  return res.json({ message: 'Password reset' });
//                } else {
//                  return done(err);
//                }
//              });
//            }
//          });
//        } else {
//          return res.status(422).send({
//            message: 'Passwords do not match'
//          });
//        }
//      } else {
//        return res.status(400).send({
//          message: 'Password reset token is invalid or has expired.'
//        });
//      }
//    });
//  };
