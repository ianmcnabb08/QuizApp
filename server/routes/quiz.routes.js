const express = require('express');
const axios = require('axios');

const router = express.Router();

// Endpoint to fetch random Jeopardy clues
router.get('/clues', async (req, res) => {
    try {
        const count = req.query.count || 1;
        const response = await axios.get(`https://cluebase.herokuapp.com/clue?count=${count}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching clues:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    });

module.exports = router;
