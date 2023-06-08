const Prod=require("../models/products");
const User=require('../models/users');
const path= require('path');
const fs=require('fs');

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
            return Prod.countDocuments({ category_name: 'medications' }); // Perform the count query
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
const GetAllProductshair = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'hair'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'hair' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/hair', {
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
const GetAllProductsperfume = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'perfume'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'perfume' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/perfume', {
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
const GetAllProductsmother = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'motherbaby'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'motherbaby' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/motherbaby', {
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
            return Prod.countDocuments({ category_name: 'vit' }); // Perform the count query
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
            return Prod.countDocuments({ category_name: 'personalcare' }); // Perform the count query
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

const GetAllProductsmakeup = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'makeup'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'makeup' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/makeup', {
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

const GetAllProductsskincare = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'skincare'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'skincare' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/skincare', {
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

const GetAllProductscleaning = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'cleaning'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'cleaning' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/cleaning', {
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
const GetAllProductsmedical = (req, res)=>{
    const page = req.query.page || 1;
    const productsPerPage = 10;
    let products = [];
    
    Prod.find({category_name: 'medical'})
        .skip((page * productsPerPage) - productsPerPage)
        .limit(productsPerPage)
        .exec()
        .then(result => {
            products = result;
            return Prod.countDocuments({ category_name: 'medical' }); // Perform the count query
        })
        .then(count => {
            const totalNumberOfPages = Math.ceil(count / productsPerPage);
            res.render('pages/medical', {
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
    Prod.findOne({_id: req.params.id})
    .then(result => {
        res.render('pages/productDetails', {prod: result, user: (req.session.user === undefined ? "" : req.session.user)});
    })
    .catch(err => {
      console.log(err);
    });
};
const getProductDetail = (req, res, next) => {
    const productId = req.params.id;
  
    Prod.findById(productId)
      .then(product => {
        if (!product) {
          const error = new Error('Product not found');
          error.statusCode = 404;
          throw error;
        }
  
        res.render('productdetail', { product });
      })
      .catch(err => {
        next(err);
      });
  };

module.exports ={
    GetAllProductsmedications,
    GetAllProductsvit,
    GetAllProductspersonalcare,
    GetAllProductsmakeup,
    GetAllProductsskincare,
    GetAllProductscleaning,
    GetAllProductsmother,
    GetAllProductsperfume,
    GetAllProductshair,
    GetAllProductsmedical,
    GetProduct,
    getProductDetail
};