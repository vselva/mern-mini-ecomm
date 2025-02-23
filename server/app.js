const express = require('express'); // Import Express framework
const dotenv = require('dotenv'); // Import dotenv for environment variables
const path = require('path'); // Import path module for working with file paths
const cors = require('cors'); // Import CORS to handle cross-origin requests

const app = express(); // Create an Express application instance

// ✅ Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// ✅ Middleware to parse incoming JSON requests
app.use(express.json());

// ✅ Load environment variables from the `.env` file located in the `config` directory
dotenv.config({
    path: path.join(__dirname, 'config', 'config.env') 
    // ^ Example path: /home/user/node-api/config/config.env
});

// ⚡ Other useful features of the 'path' module:
// path.dirname()  => Get the directory name from a path
// path.basename() => Get the file name from a path
// path.extname()  => Get the extension from a file path
//
// path.join()     => Join multiple path segments (e.g., path.join('a', 'b', 'c') => 'a/b/c')
// path.resolve()  => Resolve an absolute path
//
// path.normalize() => Fix incorrect slashes in a path
// path.parse()     => Break down a file path into an object 
// { root: <root>, dir: <dir>, ext: <ext> }
//
// path.relative()  => Get the relative path from one location to another
// path.isAbsolute() => Check if a path is absolute
//
// 🔹 Special Constants:
// __dirname  => Absolute path of the current directory
// __filename => Absolute path of the current file
// path.sep   => System-specific path separator ('/' on Linux/macOS, '\' on Windows)

// ✅ Connect to Database
const connectDatabase = require('./config/connectDatabase');
connectDatabase();

// ✅ Middleware for logging API requests
const { logAPI } = require('./middlewares/logger');
app.use(logAPI);

// ✅ Product API Routes
const productsRoutes = require('./routes/productRoutes');
app.use('/api/v1/', productsRoutes);

// ✅ Order API Routes
const orderRoutes = require('./routes/orderRouter');
app.use('/api/v1', orderRoutes);

// ✅ Alternate way to define an API without using a separate router module
// const orderController = require('./controller/orderController');
// app.get('/api/v1/order', orderController.createOrder);

// ✅ Start the Express server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
