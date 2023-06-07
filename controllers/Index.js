const Prod=require("../models/products");
const User=require('../models/users');
const path= require('path');
const fs=require('fs');

const GetAllProducts = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
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

const GetAllProductsmedications = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'medications'})
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

const GetAllProductsvit = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'vit'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments(); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/vit', {
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

const GetAllProductspersonalcare = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'personalcare'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments(); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/personalcare', {
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
    GetAllProductsmedications,
    GetAllProductsvit,
    GetAllProductspersonalcare,
    GetProduct
};