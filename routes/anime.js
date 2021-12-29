const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const AnimeModel = require('../models/Anime');

// router.get('/', async (req, res) => {
//     const ani_url = 'https://api.jikan.moe/v3/search/anime?q=death_note&limit=8';
//     const options = {
//         method: 'GET'
//     };
//     const ani_res = await fetch(ani_url, options); // Fetches API
//     const ani_res_json = await ani_res.json(); // Converts API to JSON file
//     const ani_res_obj = ani_res_json.results; // Gets specific property from JSON file
//     res.status(200).send(ani_res_obj);
// });

router.post('/', async (req, res) => {
    const animeModel = new AnimeModel({
        title: req.body.title,
        image_url: req.body.image_url,
        description: req.body.description,
    })

    try{
        const savedAnime = await animeModel.save();
        res.json(savedAnime);
    }catch(err){
        res.json({ message: err });
    }
    
});

module.exports = router;