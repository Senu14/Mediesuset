// Importing axios to make HTTP requests to external APIs
const axios = require('axios');

// Function to get user tickets by ID (or other similar actions)
exports.getUserTicketsById = async (req, res) => {
    try {
// Making a GET request to an external API, using the ID from request parameter
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/usertickets/${req.params.id}`);
        // Sending the data received from the external API as JSON response
        res.json(response.data);
    } catch (error) {
        // Logging the error and sending a custom error message as JSON response
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the user tickets.' });
    }
};

// Function to get ticket count by camp ID
exports.getTicketsCountByCampId = async (req, res) => {
    try {
        // Code to fetch ticket count by camp ID and handle any errors
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/usertickets/num_by_camp_id/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the ticket count.' });
    }
};

// Function to create user ticket
exports.createUserTicket = async (req, res) => {
    try {

        // Code to create a user ticket and handle any errors
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
