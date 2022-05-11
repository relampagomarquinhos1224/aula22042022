var mysql = require('mysql');

const { con } = require('../connect/connect_db')

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
    });
});