const express=require("express");
const router=express.Router();
// const fr=require("../models/Search");
// const srch1=require("../controllers/Index");


router.get("/",function(req,res){
   res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });

   });

//    router.get('/srch', (req, res) => {
//       res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
//   });
// router.post('/srch',srch1.srch);

router.get("/index",function(req,res){
res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });

});


// router.get("/index",function(req,res){
// res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
// });
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
 router.get('/cleaning', (req, res) => {
    res.render('pages/cleaning',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/hair', (req, res) => {
    res.render('pages/hair',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/login', (req, res) => {
    res.render('pages/login', { user: (req.session.user === undefined ? "" : req.session.user) });
 });
 
 router.get('/registr', (req, res) => {
    res.render('pages/registr', { user: (req.session.user === undefined ? "" : req.session.user) });
 });
//  router.get('/reset', (req, res) => {
//     res.render('pages/reset',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
//  router.get('/adminsidebar', (req, res) => {
//     res.render('pages/adminsidebar',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
//  router.get('/admin', (req, res) => {
//     res.render('pages/admin',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
//  router.get('/addproduct', (req, res) => {
//     res.render('pages/addproduct',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
//  router.get('/adminheader', (req, res) => {
//     res.render('pages/adminheader',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
 router.get('/404', (req, res) => {
    res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/footer', (req, res) => {
    res.render('pages/footer',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
// router.get('/new_pass', (req, res) => {
//     res.render('pages/new_pass',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
router.get('/makeup', (req, res) => {
    res.render('pages/makeup',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/medical', (req, res) => {
    res.render('pages/medical',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/medications', (req, res) => {
    res.render('pages/medications',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/motherbaby', (req, res) => {
    res.render('pages/motherbaby',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/perfume', (req, res) => {
    res.render('pages/perfume',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/personalcare', (req, res) => {
    res.render('pages/personalcare',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/productDetails', (req, res) => {
    res.render('pages/productDetails',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/skincare', (req, res) => {
    res.render('pages/skincare',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/vit', (req, res) => {
    res.render('pages/vit',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/checkout', (req, res) => {
    res.render('pages/checkout',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
//  router.get('/forgot', (req, res) => {
//     res.render('pages/forgot',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
//  router.get('/getFruits',(req,res)=>{
//    let payload = req.body.payload.trim();
//    console.log(payload);
//     });
   
 
 module.exports=router