// Importing essential libraries
const express = require('express'); // Express to handle routing and middleware
const cookieParser = require('cookie-parser');// For parsing cookies from HTTP requests
const cors = require('cors');// Enabling Cross-Origin Resource Sharing (CORS)
const routes = require('./routes/index'); // Importing all the defined routes
// const connectDB = require('./config/db'); // Database connection configuration

// Initializing an Express application
const app = express();
// Middleware to parse JSON data from the request body
app.use(express.json());
// Middleware to parse and handle cookies in HTTP requests
app.use(cookieParser());
// Configuring CORS for the frontend origin, with allowed methods and headers


app.use(cors({ 
    origin: 'http://localhost:3000', // Allowing requests only from this origin
    credentials: true, // Enabling credentials, allowing cookies to be sent
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed request headers
}));

// connectDB();
// Connecting to the database using imported connectDB function

// Associating imported routes with the root path
app.use('/', routes);

// Defining the port number, either from environment variables or default to 4000
const port = process.env.PORT || 5000;

// Starting the server on the specified port, and logging a message to the console
app.listen(port, () => console.log(`Server is running on port ${port}...`));