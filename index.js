var express = require('express')
var ejs = require('ejs')
var bodyParser=require('body-parser');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(8081);
app.get('/', function (req, res) {
   res.render('pages/index');
});
