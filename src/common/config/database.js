const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabs',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'LN-pc-626',
    dateStrings: true
};
