const { request } = require("graphql-request");
const {setCachedUserId} = require("../cache")

const userInfo = async (req, res, next) => {
  console.log("Soy el req", req.params.id);
  try {
    const query = `
      query GetUser($id: String!) {
        users(id: $id) {
          _id
          firstName
          lastName
          username
          email
        }
      }
    `;

    const variables = {
      id: req.params.id,
    };

    const endpoint = "http://localhost:3000/graphql";

    const data = await request(endpoint, query, variables);

    const idd = data.users._id
    setCachedUserId(data.users)

    console.log("Usuario obtenido: ", data.users);
    res.json(data.users);
  } catch (error) {
    console.error(error);
  }
};

const mealInfo = (req, res) => {

  const { product_id, user_id, name, count, price } = req.query;
  const countInt = parseInt(count, 10)
  const priceInt = parseInt(price, 10)
  const query = `
  mutation SendMeal($input: mealInput) {
    sendMeal(input: $input) {
      product_id
    }
  }
`;
  const variables = {
    input: {
      product_id,
      user_id,
      name,
      count: countInt,
      price: priceInt,
    }
  };

  const endpoint = "http://localhost:3000/graphql";

  request(endpoint, query, variables)
    .then((data) => {
      res.send("Mutación exitosa");
    })
    .catch((error) => {
      res.status(500).send("Error en la mutación: " + error);
    });
};

module.exports = { userInfo, mealInfo };
