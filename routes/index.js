const express=require("express");
const router=express.Router();
// const fr=require("../models/Search");
// const srch1=require("../controllers/Index");
const Index=require("../controllers/Index");


router.get("/",function(req,res){
   res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
});
router.get("/index",function(req,res){
   res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
});

//nav routes
router.get('/about', (req, res) => {
   res.render('pages/about',{user: (req.session.user === undefined ? "" : req.session.user) });
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

//mawgodeen fel user routes
//login in & sign up routes
//  router.get('/login', (req, res) => {
//     res.render('pages/login', { user: (req.session.user === undefined ? "" : req.session.user) });
// });
// router.get('/forgotPassword', (req, res) => {
//    res.render('pages/forgotPassword');
// });
// router.get('/registr', (req, res) => {
//    res.render('pages/registr', { user: (req.session.user === undefined ? "" : req.session.user) });
// });
// router.get('/load', (req, res) => {
//    res.render('pages/load',{user: (req.session.user === undefined ? "" : req.session.user) });
// });
//-----------------------
//    router.get('/srch', (req, res) => {
//       res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
//   });
// router.post('/srch',srch1.srch);

//------------------------
        //route articles yab2a gowa blog  

//  router.get('/articles', (req, res) => {
//     res.render('pages/articles',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });
 
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


<<<<<<< HEAD
});
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
 router.get('/forgotPassword', (req, res) => {
    res.render('pages/forgotPassword');
});
 router.get('/registr', (req, res) => {
    res.render('pages/registr', { user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/adminsidebar', (req, res) => {
    res.render('pages/adminsidebar',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/admin', (req, res) => {
    res.render('pages/admin',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/addproduct', (req, res) => {
    res.render('pages/addproduct',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/adminheader', (req, res) => {
    res.render('pages/adminheader',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/404', (req, res) => {
    res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
=======
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

   //-------------------------------
//  router.get('/404', (req, res) => {
//     res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
//  });

>>>>>>> 4fd5feb71b4040c9cb22cd3277dc34d420916ff9
 router.get('/footer', (req, res) => {
    res.render('pages/footer',{user: (req.session.user === undefined ? "" : req.session.user) });
 });

 //404 page
 router.use((req, res) => {
   res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
 });

 module.exports=router