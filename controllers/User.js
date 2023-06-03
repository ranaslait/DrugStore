const User = require("../models/users");
const path = require('path');
const bcrypt = require('bcrypt');

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