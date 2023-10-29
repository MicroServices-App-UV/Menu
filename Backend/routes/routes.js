const express = require("express");
const { registerRestaurant, getRestaurants } = require('../controllers/controllers.js')
const router = express.Router();

router.post('/restaurantes', registerRestaurant )
router.get('/restaurantes', getRestaurants )


module.exports = router;