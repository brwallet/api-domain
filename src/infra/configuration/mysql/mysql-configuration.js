const dbConfig = require('./mysql-config-params');
const mysql = require('mysql');

const connectionPool = mysql.createPool({
  connectionLimit: dbConfig.NUM_CONN_POOL,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connectionPool;
