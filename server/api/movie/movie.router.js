const router = require('express').Router();
const validator = require('./movie.validators');

const movie = require('./movie.controller');

router.post('/', validator.createMovie, movie.createMovie);
router.get('/', validator.getMovies, movie.getMovies);
router.get('/:movie_id', validator.getMovieByID, movie.getMovieByID);
router.put('/:movie_id', validator.updateMovie, movie.updateMovie);
router.delete('/:movie_id', validator.deleteMovie, movie.deleteMovie);

module.exports = router;
