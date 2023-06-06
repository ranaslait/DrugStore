const Prod=require("../models/products");
const User=require('../models/users');
const path= require('path');
const fs=require('fs');

const GetAllProducts = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 2;
    let products = [];
    
    Prod.find()
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments(); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/medications', {
                products: products,
                current: page,
                pages: totalNumberOfPages,
                user: (req.session.user === undefined ? "" : req.session.user)
            });
        })
    .catch(err => {
        console.log(err);
    });
};

const GetProduct = (req, res) => {
    const id = {"_id" : req.params.id};
    Prod.findOne(id)
    .then(result => {
        res.render('pages/productDetails', {prod: result, user: (req.session.user === undefined ? "" : req.session.user)});
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports ={
    GetAllProducts,
    GetProduct
};