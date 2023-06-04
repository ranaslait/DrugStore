const express=require("express");
var bodyParser=require('body-parser');
const Admin=require("../controllers/Admin");
const router=express.Router();
router.get('/', (req, res) => {
    res.render('pages/admin',{user: (req.session.user === undefined ? "" : req.session.user) });
});
router.get("/addproduct", (req, res) => {
    res.render('pages/addproduct');
});
router.post("/addproduct", Admin.Addpro);
router.get("/toAdmin/:id",Admin.toAdmin);
router.use(bodyParser.json());
router.use((req, res, next) => {
    if (req.session.user !== undefined && req.session.user.type === 'admin') {
        next();
    }
    else {
        res.render('err', { err: 'You are not an Admin',user: (req.session.user === undefined ? "" : req.session.user) })
    }
});
module.exports=router;