const Prod=require("../models/products");
const User=require('../models/users');
const path= require('path');
const fs=require('fs');

const GetAllProducts = (req, res)=>{
    Prod.find()
    .then(result => {
        res.render('pages/medications', {products: result, user: (req.session.user === undefined ? "" : req.session.user) });
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports ={GetAllProducts};