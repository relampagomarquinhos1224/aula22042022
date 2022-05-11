var mysql = require('mysql');
const { con } = require('../connect/connect_db')

con.connect(function (err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});