const mysql = require('mysql');
const config = require('./dbConfig');
const { connectionData } = config;

const setConnection = (onError) => new Promise((resolve, reject) => {
    const connection = mysql.createConnection(connectionData);

    connection.on('error', onError);

    connection.connect(err => {
        if (err) {
            console.error('Ошибка при подключении к БД:', err);
            return reject(err);
        }

        console.log('EVERYTHING FINE, CONNECTED ------> OK');
        resolve(connection);
    });
});


module.exports = { setConnection };