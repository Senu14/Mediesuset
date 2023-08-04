const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.set('strictQuery', true);


function connectDB() {
  mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected...'))
    .catch(error => console.log('Error connecting to MongoDB: ', error));
}

module.exports = connectDB;
