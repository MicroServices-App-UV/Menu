const express = require("express");
const { userInfo, mealInfo } = require('../controllers/graphqlService.js')
const { registerRestaurant, getRestaurants } = require('../controllers/controllers.js')
const { getCachedUserId } = require('../cache.js')

const router = express.Router();

router.post('/restaurantes', registerRestaurant )

router.get('/restaurantes', getRestaurants )

router.get('/user/:id', userInfo)

router.get('/user', getCachedUserId )

router.get('/mealsinfo', mealInfo)
module.exports = router;