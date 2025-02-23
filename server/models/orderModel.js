const mongoose = require('mongoose');

// ===========================
// Order Schema
// ===========================
const orderSchema = new mongoose.Schema({
    cartItems: {
        type: Array, // Array to store ordered items
        required: true // Ensuring cart items are provided
    },
    amount: {
        type: Number, // Total order amount
        required: true
    },
    status: {
        type: String, // Order status (e.g., pending, shipped, delivered)
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], // Restricting allowed values
        default: 'pending' // Default status
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets current timestamp when the order is created
    }
});

// ===========================
// Order Model
// ===========================
// mongoose.model expects two parameters: model name and schema
const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel; // Exporting the model for use in other files
