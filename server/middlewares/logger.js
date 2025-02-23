// ================================================
// Different Ways to Export Modules in Node.js
// ================================================

// -----------------------------------------------
// Method 1: Using `exports` Object
// Best for exporting multiple functions/objects
// -----------------------------------------------
exports.logAPI = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// -----------------------------------------------
// Method 2: Using `module.exports`
// Best for exporting a single function
// -----------------------------------------------
/*
const logAPI = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

module.exports = logAPI;  // Exporting only one function
*/

// -----------------------------------------------
// Method 3: Exporting an Object Containing Functions
// Best for grouping multiple functions in a single object
// -----------------------------------------------
/*
const logAPI = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

const anotherFunction = () => {
    console.log('Another function');
};

// Export multiple functions under one object
module.exports = { logAPI, anotherFunction };
*/

// -----------------------------------------------
// Method 4: Using `module.exports` with a Class
// Best for OOP-style exports and shared state
// -----------------------------------------------
/*
class Logger {
    logAPI(req, res, next) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    }

    anotherFunction() {
        console.log('Another function');
    }
}

// Export an instance of the Logger class
module.exports = new Logger();
*/

// -----------------------------------------------
// Method 5: Using ES Module Syntax (`import/export`)
// Best for modern JavaScript (Requires `"type": "module"` in package.json)
// -----------------------------------------------
/*
// Export a named function
export const logAPI = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
*/
