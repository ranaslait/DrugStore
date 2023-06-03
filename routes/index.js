const express=require("express");
const router=express.Router();


/**
 * @param {string | object | Buffer} payload
 */
function createVerificationToken(payload) {
   return jwt.sign( payload);
 }

/**
*
* @param {string} email
* @param {string} token
*/
async function sendPasswordResetLink(email, token) {
 const transporter = createTransport({
   service: "Gmail",
   auth: {
     user: 'ddose0725@gmail.com' ,
     pass: 'dose123456789',
   },
 });
 const url = `http://localhost:8081/api/password/${token}`;

 await transporter.sendMail({
   to: email,
   subject: "Reset your password",
   html: `<p>Click <a href='${url}'>here</a> to reset your password.</p>
   <p> If you did not request this please ignore this message`,
 });
}

module.exports = {sendPasswordResetLink, createVerificationToken};
router.get("/",function(req,res){
res.render('pages/index',{user: (req.session.user === undefined ? "" : req.session.user) });

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
 
 router.get('/registr', (req, res) => {
    res.render('pages/registr', { user: (req.session.user === undefined ? "" : req.session.user) });
 });
 router.get('/reset', (req, res) => {
    res.render('pages/reset',{user: (req.session.user === undefined ? "" : req.session.user) });
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
 router.get('/footer', (req, res) => {
    res.render('pages/footer',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
router.get('/new_pass', (req, res) => {
    res.render('pages/new_pass',{user: (req.session.user === undefined ? "" : req.session.user) });
 });
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
 
 module.exports=router