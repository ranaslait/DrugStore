const express=require("express");
var bodyParser=require('body-parser');

const router=express.Router();
router.use(bodyParser.json());

const Admin=require("../controllers/Admin");


router.use((req, res, next) => {
    if (req.session.user !== undefined && req.session.user.type === 'admin') {
        next();
    }
    else {
        res.redirect('pages/404');
    }
});


router.get('/404', (req, res) => {
    res.render('pages/404',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
router.get('/', (req, res) => {
    res.render('pages/admin',{user: (req.session.user === undefined ? "" : req.session.user) });
});
router.get("/addproduct", (req, res) => {
    res.render('pages/addproduct');
});


router.post("/addproduct", Admin.Addpro);
router.get("/toAdmin/:id",Admin.toAdmin);
module.exports=router;