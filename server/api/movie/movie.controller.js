const { validationResult } = require('express-validator');

const paginateResults = require('../utils/pagination');
const errors = require('../utils/errors');

const movieService = require('./movie.service');

const createMovie = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      data: validationErrors.array(),
    });
  }

  const movie = req.body;

  try {
    const results = await movieService.createMovie(movie);
    res.status(200).send({
      status: 'success',
      data: results,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(errors.SERVER_ERROR);
  }
};

const getMovies = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      data: validationErrors.array(),
    });
  }

  const params = {
    page: parseInt(req.query.page),
    limit: parseInt(req.query.limit),
  };

  try {
    let results = await movieService.getMovies();
    res.status(200).send(await paginateResults(results, params));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(errors.SERVER_ERROR);
  }
};

const getMovieByID = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      data: validationErrors.array(),
    });
  }

  const { movie_id } = req.params;

  try {
    const results = await movieService.getMovieByID(movie_id);
    res.status(200).send({
      status: 'success',
      data: results,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(errors.SERVER_ERROR);
  }
};

const updateMovie = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      data: validationErrors.array(),
    });
  }

  const movie = req.body;
  const { movie_id } = req.params;

  try {
    const results = await movieService.updateMovie(movie, movie_id);
    res.status(200).send({
      status: 'success',
      data: results,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(errors.SERVER_ERROR);
  }
};

const deleteMovie = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      data: validationErrors.array(),
    });
  }

  const { movie_id } = req.params;

  try {
    const results = await movieService.deleteMovie(movie_id);
    res.status(200).send({
      status: 'success',
      data: results,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(errors.SERVER_ERROR);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieByID,
  updateMovie,
  deleteMovie,
};
