const mongoose = require('mongoose'); // Importing Mongoose for database operations

// Define Product Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'], // Ensures the name is mandatory
        trim: true // Removes extra spaces from the beginning and end
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'], // Ensures price is mandatory
        trim: true // Not needed for numbers, but does no harm
    },
    description: {
        type: String,
        required: [true, 'Product description is required'], // Ensures a description is provided
    },
    ratings: {
        type: Number,
        default: 0 // Default rating is set to 0 if not provided
    },
    images: [
        {
            url: {
                type: String // Image URL should be stored as a string
            }
        }
    ], 
    category: {
        type: String,
        required: [true, 'Product category is required'], // Ensures category is provided
    },
    seller: {
        type: String,
        required: [true, 'Product seller is required'], // Ensures seller name is mandatory
    },
    stock: {
        type: Number,
        required: [true, 'Product stock is required'], // Ensures stock quantity is provided
        default: 1 // Default stock is 1 if not specified
    },
    numberOfReviews: {
        type: Number,
        default: 0 // Default review count is 0
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically stores the current date when a product is created
    },
});

// Create Product Model from the Schema
const productModel = mongoose.model('Product', productSchema);

// Export the Model to Use in Other Parts of the Application
module.exports = productModel;
