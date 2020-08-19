const connectionPool = require('../infra/configuration/mysql/mysql-configuration');

class DatabaseFactory {

    executeQuery(query, args) {
        return new Promise((resolve, reject) => {
            try {
                connectionPool.query(query, args, (err, rows) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            } catch (error) {
                return reject(err);
            }
        });
    }

}

module.exports = DatabaseFactory;