const axios = require('axios');

exports.getEmailList = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/newsletter');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the email list.' });
    }
};

exports.createEmail = async (req, res) => {
    try {
        const response = await axios.post('https://api.mediehuset.net/mediesuset/newsletter', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to create the email.' });
    }
};

exports.deleteEmail = async (req, res) => {
    try {
        const response = await axios.delete(`https://api.mediehuset.net/mediesuset/newsletter/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to delete the email.' });
    }
};
