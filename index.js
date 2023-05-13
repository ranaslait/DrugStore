var express = require('express')
var ejs = require('ejs')
// var bodyParser=require('body-parser');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(8081);
app.get('/', function (req, res) {
   res.render('pages/index');
});
app.get('/about.ejs', (req, res) => {
   res.render('pages/about')
});
app.get('/articles.ejs', (req, res) => {
   res.render('pages/articles')
});
app.get('/blog.ejs', (req, res) => {
   res.render('pages/blog')
});
app.get('/cleaning.ejs', (req, res) => {
   res.render('pages/cleaning')
});
app.get('/hair.ejs', (req, res) => {
   res.render('pages/hair')
});
app.get('/loginform.ejs', (req, res) => {
   res.render('pages/loginform')
});
app.get('/makeup.ejs', (req, res) => {
   res.render('pages/makeup')
});
app.get('/medical.ejs', (req, res) => {
   res.render('pages/medical')
});
app.get('/medications.ejs', (req, res) => {
   res.render('pages/medications')
});
app.get('/motherbaby.ejs', (req, res) => {
   res.render('pages/motherbaby')
});
app.get('/perfume.ejs', (req, res) => {
   res.render('pages/perfume')
});
app.get('/personalcare.ejs', (req, res) => {
   res.render('pages/personalcare')
});
app.get('/productDetails.ejs', (req, res) => {
   res.render('pages/productDetails')
});
app.get('/skincare.ejs', (req, res) => {
   res.render('pages/skincare')
});
app.get('/vit.ejs', (req, res) => {
   res.render('pages/vit')
});
