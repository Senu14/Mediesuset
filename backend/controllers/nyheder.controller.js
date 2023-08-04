const axios = require('axios');

// Function to get news list
exports.getnyhederList = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/news');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the news list.' });
    }
};

// Function to get news details
exports.getnyhederDetails = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/news/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the news details.' });
    }
};
