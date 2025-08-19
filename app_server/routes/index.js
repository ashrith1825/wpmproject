const express = require('express');
const router = express.Router();
const ctrlSports = require('../controllers/sports');
const ctrlOthers = require('../controllers/others');

/* Sports pages */
router.get('/sports', ctrlSports.sportsList);
router.get('/players', ctrlSports.playerInfo);
router.get('/news-events', ctrlSports.newsEvents);

/* Other pages */
router.get('/', ctrlOthers.home);
router.get('/about', ctrlOthers.about);

module.exports = router;
