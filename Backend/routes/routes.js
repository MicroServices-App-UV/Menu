const express = require("express");
const { userInfo } = require('../controllers/graphqlService.js')

const { registerRestaurant, getRestaurants } = require('../controllers/controllers.js')
const router = express.Router();

router.post('/restaurantes', registerRestaurant )

router.get('/restaurantes', getRestaurants )

router.get('/user/:id', userInfo)

module.exports = router;