const mongoose = require("mongoose");

const platilloSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Platillo', platilloSchema);