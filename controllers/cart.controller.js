const Cart = require('../models/cart');
const addItemToCart = (req, res) => {
    try {
      console.log("ana b save el order fe el datbase aho");
      const cartItem =new Cart ({
        // userId:req.body.userId,
        product: req.body.product,
        quantity: parseInt(req.body.quantity),
        price: req.body.price,
        image: req.body.image,
        name: req.body.name,
        
          });
  
      console.log(cartItem);
      cartItem.save().then((doc) => res.redirect('/cart'));
    } catch (error) {
      res.render('pages/404');
    }
  };
  const ViewCartItems = (req, res) => {
    Cart.find()
    .then(result =>{
      res.render('pages/cart', {products: result,user: (req.session.user === undefined ? "" : req.session.user)});
    })
    .catch(err => {
        console.log(err);
    });
  };

module.exports = {
  
  addItemToCart,
  ViewCartItems
};