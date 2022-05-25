const { check } = require('express-validator');

// Express-validator does not have this validations, so I had to do them myself.
const DATE_REGEX = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;

const createMovie = [
  check('movie_title')
    .exists()
    .withMessage('Debes ingresar el título de la película.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('El título puede tener como máximo 50 carácteres.'),

  check('movie_release_date')
    .exists()
    .withMessage('Debes ingresar una fecha de estreno.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .matches(DATE_REGEX)
    .withMessage("La fecha de estreno debe tener el formato 'AAAA-MM-DD'"),

  check('movie_genre')
    .exists()
    .withMessage('Debes ingresar el género de la película.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('El género puede tener como máximo 50 carácteres.'),

  check('movie_plot')
    .exists()
    .withMessage('Debes incluir el plot de la película.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 65535 })
    .withMessage('El plot puede tener como máximo 65535 carácteres.'),
];

const updateMovie = [
  check('movie_id')
    .exists()
    .withMessage('Debes indicar la ID de la película a editar.')
    .bail()
    .isInt({ min: 1 })
    .withMessage('La ID debe ser un numero positivo.'),

  check('movie_title')
    .exists()
    .withMessage('Debes ingresar el título de la película.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('El título puede tener como máximo 50 carácteres.'),

  check('movie_release_date')
    .exists()
    .withMessage('Debes ingresar una fecha de estreno.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .matches(DATE_REGEX)
    .withMessage("La fecha de estreno debe tener el formato 'AAAA-MM-DD'"),

  check('movie_genre')
    .exists()
    .withMessage('Debes ingresar el género de la película.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('El género puede tener como máximo 50 carácteres.'),

  check('movie_plot')
    .exists()
    .withMessage('Debes incluir el plot de la película.')
    .bail()
    .isString()
    .withMessage('Tipo de dato incorrecto. Se espera un string.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 65535 })
    .withMessage('El plot puede tener como máximo 65535 carácteres.'),
];

const getMovies = [
  check('page')
    .exists()
    .withMessage('Debes indicar qué página del listado de usuarios quieres ver.')
    .bail()
    .isInt({ min: 1 })
    .withMessage('La página debe ser un número positivo.'),

  check('limit')
    .exists()
    .withMessage('Debes indicar cuántos resultados por página quieres.')
    .bail()
    .isInt({ min: 1 })
    .withMessage('El límite debe ser un número positivo.'),
];

const getMovieByID = [
  check('movie_id')
    .exists()
    .withMessage('Debes indicar la ID de la película.')
    .bail()
    .isInt({ min: 1 })
    .withMessage('ID Inválida. Debe ser un número positivo.'),
];

const deleteMovie = [
  check('movie_id')
    .exists()
    .withMessage('Debes indicar la ID de la película a eliminar.')
    .bail()
    .isInt({ min: 1 })
    .withMessage('La ID debe ser un numero positivo.'),
];

module.exports = {
  createMovie,
  getMovies,
  getMovieByID,
  updateMovie,
  deleteMovie,
};
