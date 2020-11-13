const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '960921nihao',
    database: 'demo'
});
connection.connect();

// connection.connect();

connection.query('SELECT * from demo', function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
});

connection.end();

