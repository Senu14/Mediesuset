const jwt = require('jsonwebtoken');
const axios = require('axios');

exports.login =    async (req, res) => {
    const { username, password } = req.body;

    try {
        const response = await axios.post('https://api.mediehuset.net/token', {
            username: username,
            password: password,
        });

        // the token should be in the response.data but this depends on how the API sends it back
        const token = response.data;

        res.json({ token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during login.' });
    }
};
