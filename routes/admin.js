const express=require("express");
var bodyParser=require('body-parser');

const router=express.Router();
router.use(bodyParser.json());

const Admin=require("../controllers/Admin");

//Check admin
router.use((req, res, next) => {
    if (req.session.user !== undefined && req.session.user.type === 'admin') {
        next();
    }
    else {
        res.redirect('pages/404');
    }
});

//Home page
router.get('/', (req, res) => {
    res.render('pages/admin',{user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get("/index",function(req,res){
    res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });
});
//Navigation

router.get("/admin", (req, res) => {
    res.render('pages/admin',{user: (req.session.user === undefined ? "" : req.session.user) });
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
router.get('/checkout', (req, res) => {
    res.render('pages/checkout',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/load', (req, res) => {
   res.render('pages/load',{user: (req.session.user === undefined ? "" : req.session.user) });
});

//Admin functions
router.get("/addproduct", (req, res) => {
    res.render('pages/addproduct',{user: (req.session.user === undefined ? "" : req.session.user) });
});
router.get("/team", (req, res) => {
    res.render('pages/team',{user: (req.session.user === undefined ? "" : req.session.user) });
    //  res.render('pages/team', {users: result, user: (req.session.user === undefined ? "" : req.session.user)});

});



router.get("/products", Admin.ViewAllProducts);

router.post("/addproduct", Admin.Addpro);
router.get("/toAdmin/:id",Admin.toAdmin);

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

//Error
router.get('/404', (req, res) => {
    res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
 });

module.exports=router;