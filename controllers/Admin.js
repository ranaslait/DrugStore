const User = require('../models/users');
const Prod = require("../models/products");
const path = require('path');
const fs = require('fs');
const toAdmin = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { type: 'admin' })
    .then(result => {
      res.redirect('/admin');
    })
    .catch(err => {
      console.log(err);
    });
};
const Addpro = async (req, res) => {
  // let imgFile;
  // let uploadPath;
  // imgFile = req.file.img;
  // uploadPath = path.join(__dirname, '../public/IMAGES/' + req.body.product_name + path.extname(imgFile.name));

  // // Use the mv() method to place the file somewhere on your server
  // imgFile.mv(uploadPath, function (err) {
  //   if (err)
  //   res.redirect('/404');
  console.log(req.body);
  const pdata = new Prod({
    category_name: req.body.category_name,
    side_effect: req.body.side_effect,
    active_ingredient: req.body.active_ingredient,
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_newprice: req.body.product_newprice,
    // img: req.body.product_name + path.extname(imgFile.name),
    img: req.body.img,
    latestOffer: req.body.latestOffer,
    inStock: req.body.inStock,
    bestSeller: req.body.bestSeller
  })
  pdata.save()
    .then(result => {
      res.render('/admin/addproduct');
    })
    .catch(err => {
      res.redirect('/404');
    })
  // })
};

const ViewAllProducts = (req, res)=>{
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
          res.render('pages/products', {
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

const ViewProduct = (req, res) => {
  Prod.findOne({_id: req.params.id})
  .then(result => {
    res.render('pages/editproduct', {product: result, user: (req.session.user === undefined ? "" : req.session.user)});
  })
  .catch(err => {
    console.log(err);
  });
};

const EditProduct = (req, res) => {
  Prod.findByIdAndUpdate({_id: req.params.id}, {side_effect: req.body.side_effect , active_ingredient: req.body.active_ingredient, product_name: req.body.product_name, product_price: req.body.product_price, product_newprice: req.body.product_newprice})
  .then(result => {
    res.redirect('/admin/products');
  })
  .catch(err => {
    console.log(err);
  });
};

const DeleteProduct = (req, res) => {
  Prod.findOneAndDelete({_id: req.params.id})
  .then(result => {
    res.redirect('/admin/products');
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports = {
  toAdmin,
  Addpro,
  ViewAllProducts,
  ViewProduct,
  EditProduct,
  DeleteProduct
};