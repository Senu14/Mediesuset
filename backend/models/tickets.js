const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);
