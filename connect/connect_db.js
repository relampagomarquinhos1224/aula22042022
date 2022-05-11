var mysql = require('mysql');

let db_host = "localhost";
let db_user = "root";
let db_pass = "";
let db_database = "ifguide";

exports.con = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_database
});


