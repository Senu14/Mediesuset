const axios = require('axios');

exports.getAllTickets = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/tickets');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTicketDetail = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/tickets/${req.params.id}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
