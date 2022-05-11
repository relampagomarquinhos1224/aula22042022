var mysql = require('mysql');
const { con } = require('../connect/connect_db')

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});