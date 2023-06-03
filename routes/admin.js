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
        res.render('err', { err: 'You are not an Admin',user: (req.session.user === undefined ? "" : req.session.user) })
    }
});

router.get("/toAdmin/:id",Admin.toAdmin);

module.exports=router;