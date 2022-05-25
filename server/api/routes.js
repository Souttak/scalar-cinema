const router = require('express').Router();

// Importing routers.
const movieRouter = require('./movie/movie.router');

// Welcome endpoint.
router.get('/', (req, res) => {
  res.send(`Welcome to Scalar's cinema API!`);
});

// Connecting all the routers.
router.use('/movies', movieRouter);

module.exports = router;
