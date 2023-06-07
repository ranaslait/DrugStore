const express=require("express");
const router=express.Router();
const Index=require("../controllers/Index");
const Prod=require("../models/products");
const cartController = require('../controllers/cart.controller');
const cart = require('../models/cart');
router.post('/add', cartController.addItemToCart);
router.post('/update', cartController.updateCartItem);
router.post('/remove', cartController.removeCartItem);

module.exports=router;
//Home page
router.get("/",function(req,res){
   res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
   });

router.get("/index",function(req,res){
res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
});

//Navigation
 router.get('/about', (req, res) => {
    res.render('pages/about',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/articles', (req, res) => {
    res.render('pages/articles',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/blog', (req, res) => {
    res.render('pages/blog',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
router.get('/cart', (req, res) => {
    res.render('pages/cart', { user: (req.session.user === undefined ? "" : req.session.user),
    cart: (req.session.cart === undefined ? "" : req.session.cart)  });
 });
// router.get('/checkout', (req, res) => {
//     res.render('pages/checkout',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
 router.get('/load', (req, res) => {
   res.render('pages/load',{user: (req.session.user === undefined ? "" : req.session.user) });
});

//categories routes
router.get('/medications', Index.GetAllProductsmedications);
router.get('/medications/productDetails/:id', Index.GetProduct);

router.get('/vit', Index.GetAllProductsvit);
router.get('/vit/productDetails/:id', Index.GetProduct);

router.get('/personalcare', Index.GetAllProductspersonalcare);
router.get('/personalcare/productDetails/:id', Index.GetProduct);

router.get('/makeup', Index.GetAllProductsmakeup);
router.get('/makeup/productDetails/:id', Index.GetProduct);

router.get('/skincare', Index.GetAllProductsskincare);
router.get('/skincare/productDetails/:id', Index.GetProduct);

router.get('/cleaning', Index.GetAllProductscleaning);
router.get('/cleaning/productDetails/:id', Index.GetProduct);

router.get('/motherbaby', Index.GetAllProducts);
router.get('/motherbaby/productDetails/:id', Index.GetProduct);

router.get('/medical', Index.GetAllProducts);
router.get('/medical/productDetails/:id', Index.GetProduct);

router.get('/hair', Index.GetAllProducts);
router.get('/hair/productDetails/:id', Index.GetProduct);

router.get('/perfume', Index.GetAllProducts);
router.get('/perfume/productDetails/:id', Index.GetProduct);

//Error
 router.get('/404', (req, res) => {
    res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/bsearch',(req,res)=>{
   res.render('bsearch');
  })
  
  router.post('/bsearch', async (req, res) => {
    let payload = req.body.payload.trim();
    try {
      let prodsearch = await Prod.find({
      
         product_name: { $regex: new RegExp('^' + payload + '.*', 'i')}
      }).exec();
  
      if (prodsearch) {
        // Limit search results to 3
        prodsearch = prodsearch.slice(0, 3);
        res.send({ payload: prodsearch });
      } else {
        // Handle the case when prodsearch is undefined
        res.send({ payload: [] });
      }
    } catch (error) {
      console.log('Error in search:', error);
      res.send({ payload: [] });
    }
  });
  router.get('/checkout', (req, res) => {
   res.render('pages/checkout', { user: (req.session.user === undefined ? "" : req.session.user),
   cart: (req.session.cart === undefined ? "" : req.session.cart)  })
 })
//  app.get('/addtocart', (req, res) => {
 
//    res.render('/partials/addtocart', { user: (req.session.user === undefined ? "" : req.session.user),
//    cart: (req.session.cart === undefined ? "" : req.session.cart)  })
//  })
 module.exports=router