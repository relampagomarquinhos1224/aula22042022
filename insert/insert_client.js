var mysql = require('mysql');
const { con } = require('../connect/connect_db');

con.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});