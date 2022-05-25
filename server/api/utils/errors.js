// In this case I just have one error type, but if I were to have more I'd put them all in this file.

const SERVER_ERROR = {
  status: 'error',
  data: [
    {
      msg: '¡Ups! Hubo un error. Intenta nuevamente en unos segundos o reporta el error.',
      param: 'Unknown',
      location: 'Unknown',
    },
  ],
};

module.exports = {
  SERVER_ERROR,
};
