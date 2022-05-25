const mysql = require('mysql');

// Requesting environment variables.
const { DB_HOST: host, DB_USER: user, DB_PASSWORD: password, DB_DATABASE: database } = process.env;

// DB Instanciation.
const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

// Checking DB connection.
db.connect((error) => {
  if (error) throw error;
  console.log('Database running!');
});

module.exports = db;
