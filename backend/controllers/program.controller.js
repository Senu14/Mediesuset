const axios = require('axios');

exports.getProgrammeById = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/programme/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the programme.' });
    }
};

exports.createProgramme = async (req, res) => {
    try {
        const response = await axios.post('https://api.mediehuset.net/mediesuset/programme', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to create the programme.' });
    }
};

exports.deleteProgramme = async (req, res) => {
    try {
        const response = await axios.delete(`https://api.mediehuset.net/mediesuset/programme/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to delete the programme.' });
    }
};
