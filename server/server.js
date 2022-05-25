// Loading environment variables.
require('dotenv').config({ path: '../.env' });

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3050;

// Configuring middlewares.
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

// Redirecting requests outside the API.
app.get('/', (req, res) => {
  res.redirect('/api');
});

// Starting the server in the specified port.
app.listen(port, () => {
  console.log(`API Listening at http://localhost:${port}`);
});
