const restauranteSchema = require("../models/restaurante.js");
const platilloSchema = require("../models/platillo.js");

async function registerRestaurant(req, res) {
  const { name, direction, email, image, logo, meals } = req.query;

  try {
    const platillosArray = meals.map((meal) => ({
      name: meal.nombre,
      price: meal.precio,
      description: meal.descripcion,
    }));

    const platillosInsertados = await platilloSchema.insertMany(platillosArray);

    console.log(
      "Platillos",
      platillosInsertados,
      "Longitud",
      platillosInsertados.length
    );

    const respuestaRestaurante = await restauranteSchema.create({
      name,
      direction,
      email,
      image,
      logo,
      meals: platillosInsertados,
    });

    res.status(201).json(respuestaRestaurante);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al enviar datos a la base de datos");
  }
}

async function getRestaurants(req, res) {
  try {
    const restaurants = await restauranteSchema.find({});
    res.json(restaurants);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener los datos de la base de datos");
  }
}

module.exports = {
  registerRestaurant,
  getRestaurants,
};
