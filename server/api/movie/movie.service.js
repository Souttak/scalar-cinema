const db = require('../../db');
const queries = require('./movie.queries');

const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    db.query(queries.CREATE_MOVIE, [movie], (error, results) => {
      if (error) reject(error);
      resolve(movie);
    });
  });
};

const getMovies = () => {
  return new Promise((resolve, reject) => {
    db.query(queries.GET_MOVIES, (error, results) => {
      if (error) reject(error);
      resolve(results.length > 0 ? results : []);
    });
  });
};

const getMovieByID = (movie_id) => {
  return new Promise((resolve, reject) => {
    db.query(queries.GET_MOVIE_BY_ID, [movie_id], (error, results) => {
      if (error) reject(error);
      resolve(results.length > 0 ? results[0] : null);
    });
  });
};

const updateMovie = (movie, movie_id) => {
  return new Promise((resolve, reject) => {
    db.query(queries.UPDATE_MOVIE, [movie, movie_id], (error, results) => {
      if (error) reject(error);
      resolve(movie);
    });
  });
};

const deleteMovie = (movie_id) => {
  return new Promise((resolve, reject) => {
    db.query(queries.DELETE_MOVIE, [movie_id], (error, results) => {
      if (error) reject(error);
      resolve(null);
    });
  });
};

module.exports = {
  createMovie,
  getMovies,
  getMovieByID,
  updateMovie,
  deleteMovie,
};
