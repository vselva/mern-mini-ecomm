const express = require('express'); // Import Express framework
const router = express.Router(); // Create a new Router instance

const { createOrder } = require('../controller/orderController'); // Import the order controller

// Preferred method: Chaining route methods for better readability & consistency
router.route('/order').post(createOrder);

// Alternate method: Directly using HTTP method on the route
// router.post('/order', createOrder);

// Export the router to be used in the main application
module.exports = router;
