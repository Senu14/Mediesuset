const axios = require('axios');

exports.getUserTicketsById = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/usertickets/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the user tickets.' });
    }
};

exports.getTicketsCountByCampId = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/usertickets/num_by_camp_id/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the ticket count.' });
    }
};

exports.createUserTicket = async (req, res) => {
    try {
        const response = await axios.post('https://api.mediehuset.net/mediesuset/usertickets', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to create the user ticket.' });
    }
};

exports.deleteUserTicket = async (req, res) => {
    try {
        const response = await axios.delete(`https://api.mediehuset.net/mediesuset/usertickets/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to delete the user ticket.' });
    }
};
