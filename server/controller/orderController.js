const orderModel = require('../models/orderModel'); // Importing the Order model

// Create Order API - Handles order creation
// Endpoint: POST /api/v1/order
exports.createOrder = async (req, res, next) => {
    try {
        // Extract cart items from request body
        const cartItems = req.body;
        // console.log(cartItems);

        // Calculate the total order amount
        const amount = Number(cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0)).toFixed(2);
        // console.log(`amount: ${amount}`);

        // Set default order status to 'pending'
        const status = 'pending';

        // Save the order to the database
        const order = await orderModel.create({
            cartItems,
            amount, 
            status
        });

        // Respond with success message and order details
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            order
        });
    } catch (error) {
        console.error('Error creating order:', error.message);

        // Handle errors properly
        res.status(500).json({
            success: false,
            message: 'Order creation failed!',
            error: error.message
        });
    }
};
