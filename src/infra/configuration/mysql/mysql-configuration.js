const dbConfig = require('./mysql-config-params');
const mysql = require('mysql');

const connectionPool = mysql.createPool({
  connectionLimit: dbConfig.NUM_CONN_POOL,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connectionPool.getConnection(function (err, connection) {
  if (err) {
    console.log('Database not connected.');
    console.error(JSON.stringify(err))
    throw err; // not connected!
  }
  console.log('Database connected.');
});

module.exports = connectionPool;
