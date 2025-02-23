const productModel = require('../models/productModel'); // Importing the Product model

// ===========================
// Get All Products API - /api/v1/products
// ===========================
exports.getProducts = async (req, res, next) => {
    try {
        const products = await productModel.find({}); // Fetching all products from the database

        res.status(200).json({
            success: true,
            count: products.length, // Adding count of products for better API response
            products
        });
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({
            success: false,
            message: 'Server error, unable to fetch products'
        });
    }
};

// ===========================
// Get Single Product API - /api/v1/product/:id
// ===========================
exports.getSingleProduct = async (req, res) => {
    const { id } = req.params; // Extracting product ID from request params

    try {
        // Fetching a single product by its ID
        const product = await productModel.findById(id);

        // If product is not found, return a 404 response
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        // If product is found, return it
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error('Error fetching product:', error.message);
        res.status(500).json({
            success: false,
            message: 'Invalid Product ID or Server error'
        });
    }
};
