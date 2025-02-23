const express = require('express'); // Import Express framework
const router = express.Router(); // Create a new Router instance

const { getProducts, getSingleProduct } = require('../controller/productController'); // Import product controllers

// Preferred method: Using `.route()` for better readability and maintainability
router.route('/products').get(getProducts); // Get all products
router.route('/product/:id').get(getSingleProduct); // Get a single product by ID

// Alternate method: Directly using HTTP method on the route
// router.get('/products', getProducts);
// router.get('/product/:id', getSingleProduct);

// Export the router to be used in the main application
module.exports = router;
