const mongoose = require("mongoose");

/**
 * MongoDB Connection Utility
 * 
 * This module provides different ways to establish a connection with MongoDB.
 * The commented-out sections illustrate alternative methods for educational purposes.
 */

/**
 * Async/Await Method (Recommended)
 * 
 * This approach is useful for handling database connections inside an `async` function,
 * providing better readability with try-catch error handling.
 */
/*
const connectDatabase = async () => {
    try {
        const c = await mongoose.connect(process.env.DB_URL); 
        // DB_URL: Connection String from Environment Variables
        console.log(`✅ MongoDB connection successful to Host: ${c.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection Failure: ", error);
        process.exit(1); // Exit process with failure
    }
};
*/

/**
 * Promise-Based Method (Alternate)
 * 
 * Uses `.then()` and `.catch()` for handling MongoDB connections.
 * Suitable for scenarios where async-await isn't preferred.
 */
/*
const connectDatabase = () => {
   mongoose
    .connect(process.env.DB_URL) // Connection String
    .then((c) => {
        console.log(`✅ MongoDB connection successful to Host: ${c.connection.host}`);
    })
    .catch((error) => {
        console.error("❌ MongoDB connection failed: ", error);
    })
    .finally(() => console.log("ℹ️ Attempting Database Connection..."));
};
*/

/**
 * Event Listener-Based Method (Robust & Recommended for Larger Apps)
 * 
 * Uses Mongoose's built-in event listeners to track connection state changes.
 * Useful for monitoring real-time DB connection issues and debugging.
 */
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
        console.log("✅ MongoDB connection successful.");
    });

    mongoose.connection.on("error", (err) => {
        console.error("❌ MongoDB connection failure: ", err);
    });

    mongoose.connection.on("disconnected", () => {
        console.warn("⚠️ MongoDB connection disconnected!");
    });

    process.on("SIGINT", async () => {
        await mongoose.connection.close();
        console.log("⚠️ MongoDB connection closed due to app termination.");
        process.exit(0);
    });
};

// Export the function so it can be used in `app.js`
module.exports = connectDatabase;
