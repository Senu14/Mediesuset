const axios = require('axios');

exports.getCampList = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/camps');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while trying to fetch the camps list.' });
    }
};

exports.getCampDetails = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/camps/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while trying to fetch the camp details.' });
    }
};
