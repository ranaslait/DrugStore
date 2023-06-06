// // controllers/products.js

// const { MongoClient } = require('mongodb');

// const mongoURI = 'mongodb+srv://user:1234@atlascluster.pecru0p.mongodb.net/project?retryWrites=true&w=majority'; // Update with your MongoDB URI
// const client = new MongoClient(mongoURI, { useNewUrlParser: true });

// // Connect to the MongoDB database
// client.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }
  
//   console.log('Connected to MongoDB');
// });

// async function searchProducts(req, res) {
//   const query = req.query.query;
//   const db = client.db('products'); // Update with your database name
//   const collection = db.collection('project'); // Update with your collection name

//   try {
//     const results = await collection.find({ name: { $regex: query, $options: 'i' } }).toArray();
//     res.json(results);
//   } catch (error) {
//     console.error('Error searching products:', error);
//     res.redirect('/404');
//   }
// }

// module.exports = {
//   searchProducts
// };
