const User=require('../models/users');
const Prod=require("../models/products");
const path= require('path');
const fs=require('fs');
const toAdmin = (req, res) => {
    User.findByIdAndUpdate(req.params.id, { type: 'admin' })
        .then(result => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err);
        });
  };
  const Addpro= async (req, res) => {
    console.log(req.body);
    const pdata = new Prod({
       category_name: req.body.category_name,
       side_effect: req.body.side_effect,
       product_name: req.body.product_name,
       product_price: req.body.product_price,
       product_newprice: req.body.product_newprice,
       img:req.body.img,
    })
    pdata.save()
       .then(result => {
         console.log('ana fe el admin w badd product');
          res.render('/addproduct');
       })
       .catch(err => {
          res.redirect('/404');
          console.log('ana fashlt fe add el product ll db');
       })
 };
  module.exports = {
    toAdmin,
    Addpro
  };