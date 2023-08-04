const axios = require('axios');

exports.getAllScenes = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/stages');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSceneDetail = async (req, res) => {
    try {
        const response = await axios.get(`https://api.mediehuset.net/mediesuset/stages/${req.params.id}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
