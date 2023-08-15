const axios = require('axios');

exports.getAllEvents = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/events');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getEventDetail = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/events/${req.params.id}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
