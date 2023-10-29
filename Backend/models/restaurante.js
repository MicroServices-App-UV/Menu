const mongoose = require("mongoose");
const platilloSchema = require('./platillo.js');

const restauranteSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    image: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    meals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: platilloSchema,
        required: true
    }]
  });

  module.exports = mongoose.model('Restaurante', restauranteSchema);