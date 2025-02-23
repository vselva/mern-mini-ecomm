# E-Commerce API (Node.js + Express + MongoDB)

## Overview
This is a simple **E-Commerce API** built using **Node.js**, **Express.js**, and **MongoDB**. It provides endpoints to manage **products** and **orders** with support for database interactions.

## Features
- **Create, Read Products**
- **Create Orders**
- **Middleware for Logging API Requests**
- **Environment Variables Support using dotenv**
- **CORS Handling**
- **MongoDB Integration with Mongoose**

## Project Structure
```
E-Commerce-API/
│-- config/
│   ├── connectDatabase.js  # MongoDB Connection
│   ├── config.env          # Environment Variables
│-- controllers/
│   ├── orderController.js  # Handles Order APIs
│   ├── productController.js # Handles Product APIs
│-- middlewares/
│   ├── logger.js           # Middleware for Logging API Requests
│-- models/
│   ├── orderModel.js       # Order Schema
│   ├── productModel.js     # Product Schema
│-- routes/
│   ├── orderRouter.js      # Order Routes
│   ├── productRoutes.js    # Product Routes
│-- server.js               # Main Entry File
│-- README.md               # Documentation
│-- package.json            # Dependencies & Scripts
```

## Installation
### 1. Clone Repository
```bash
git clone https://github.com/your-repo/e-commerce-api.git
cd e-commerce-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file inside the `config` folder and add:
```env
PORT=5000
HOST=localhost
MONGO_URI=mongodb+srv://your_mongo_connection
```

### 4. Start the Server
```bash
npm start  # Starts the server on PORT 5000
```

## API Endpoints

### **Products API**
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | /api/v1/products | Fetch all products |
| GET    | /api/v1/product/:id | Fetch a single product by ID |

### **Orders API**
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| POST   | /api/v1/order | Create a new order |

## Learning Notes
### **Express.js Setup**
- `express.json()` is used to parse incoming JSON requests.
- `cors()` is used to handle Cross-Origin Resource Sharing.
- `dotenv.config()` loads environment variables from `.env`.

### **MongoDB with Mongoose**
- Mongoose Schema allows defining models with validation.
- Example:
  ```javascript
  const mongoose = require('mongoose');
  const orderSchema = new mongoose.Schema({
      cartItems: { type: Array, required: true },
      amount: { type: Number, required: true },
      status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' }
  });
  const orderModel = mongoose.model('Order', orderSchema);
  ```

### **Logging Middleware**
- The `logAPI` middleware logs API requests for debugging.

## Contributions
Feel free to submit pull requests or raise issues.

## License
This project is open-source under the **MIT License**.

