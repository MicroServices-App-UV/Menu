const { request } = require("graphql-request");

const userInfo = async (req, res, next) => {
    console.log('Soy el req', req.params.id)
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

    console.log("Usuario obtenido: ", data.users);
    res.json(data.users)
  } catch (error) {
    console.error(error);
  }
};

module.exports = { userInfo };