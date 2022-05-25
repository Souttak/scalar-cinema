const { validationResult } = require('express-validator');

const checkValidation = (request, response) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(422).send({
      status: 'error',
      data: errors.array(),
    });
  } else {
    return null;
  }
};

module.exports = checkValidation;
