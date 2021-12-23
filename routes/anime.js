import express, { response } from 'express';
import fetch from 'node-fetch';
export const router = express.Router();

router.get('/', async (req, res) => {
    const ani_url = 'https://api.jikan.moe/v3/search/anime?q=death_note&limit=2';
    const options = {
        method: 'GET'
    };
    const ani_res = await fetch(ani_url, options); // Fetches API
    const ani_res_json = await ani_res.json(); // Converts API to JSON file
    const ani_res_obj = ani_res_json.results[0].title; // Gets specific property from JSON file
    console.log(ani_res_obj);
    res.send(ani_res_obj);
});