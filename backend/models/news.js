const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', NewsSchema);
