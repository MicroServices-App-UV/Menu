let cachedUserId;
let nombre
let apellido

const setCachedUserId = (usuario) => {
  cachedUserId = usuario._id;
  nombre = usuario.firstName
  apellido = usuario.lastName
};

const getCachedUserId = () => {
  return { cachedUserId, nombre, apellido };
};

module.exports = { setCachedUserId, getCachedUserId };