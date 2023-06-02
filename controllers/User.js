// const User = require("../database/mongodb");
// const path = require('path');

// const Signup=(req, res) => {
//     const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
//     console.log(req.body)
//     const data = new usercollection({
//        name: req.body.name,
//        email: req.body.email,
//        password: hash,
//        phone: req.body.phone,
//        type: req.body.type
//     })
//     data.save()
//        .then(result => {
//           res.redirect('../views/login');
//        })
//        .catch(err => {
//           res.redirect('../views/404');
//        })
//  };

//  module.exports={
//     Signup
//  };