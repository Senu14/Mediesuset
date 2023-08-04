const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/index');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({ 
    origin: 'http://localhost:3000', 
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDB();

app.use('/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
