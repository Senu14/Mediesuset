const axios = require('axios');

exports.getImageList = async (req, res) => {
    try {
        const response = await axios.get('https://api.mediehuset.net/mediesuset/images');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the image list.' });
    }
};
