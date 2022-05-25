const CREATE_MOVIE = `INSERT INTO Movie SET ?`;
const GET_MOVIES = `
  SELECT
    movie_id,
    movie_title,
    DATE_FORMAT(movie_release_date, \'%Y-%m-%d\') AS movie_release_date,
    movie_genre,
    movie_plot
  FROM Movie
`;
const GET_MOVIE_BY_ID = `
  SELECT
    movie_id,
    movie_title,
    DATE_FORMAT(movie_release_date, \'%Y-%m-%d\') AS movie_release_date,
    movie_genre,
    movie_plot
  FROM Movie
  WHERE movie_id = ?
`;
const UPDATE_MOVIE = `UPDATE Movie SET ? WHERE movie_id = ?`;
const DELETE_MOVIE = `DELETE FROM Movie WHERE movie_id = ?`;

module.exports = {
  CREATE_MOVIE,
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  UPDATE_MOVIE,
  DELETE_MOVIE,
};
