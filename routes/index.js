const express=require("express");
const router=express.Router();
const Index=require("../controllers/Index");

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
    res.render('pages/cart',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
router.get('/checkout', (req, res) => {
    res.render('pages/checkout',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/load', (req, res) => {
   res.render('pages/load',{user: (req.session.user === undefined ? "" : req.session.user) });
});

//categories routes
router.get('/medications', Index.GetAllProducts);
router.get('/medications/productDetails/:id', Index.GetProduct);

router.get('/vit', Index.GetAllProducts);
router.get('/vit/productDetails/:id', Index.GetProduct);

router.get('/personalcare', Index.GetAllProducts);
router.get('/personalcare/productDetails/:id', Index.GetProduct);

router.get('/makeup', Index.GetAllProducts);
router.get('/makeup/productDetails/:id', Index.GetProduct);

router.get('/skincare', Index.GetAllProducts);
router.get('/skincare/productDetails/:id', Index.GetProduct);

router.get('/cleaning', Index.GetAllProducts);
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

 
 module.exports=router