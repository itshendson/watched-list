const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const ani_url = 'https://api.jikan.moe/v3/search/anime?q=death_note&limit=8';
    const options = {
        method: 'GET'
    };
    const ani_res = await fetch(ani_url, options); // Fetches API
    const ani_res_json = await ani_res.json(); // Converts API to JSON file
    const ani_res_obj = ani_res_json.results; // Gets specific property from JSON file
    res.send(ani_res_obj);
});

router.post('/', (req, res) => {

})

module.exports = router;