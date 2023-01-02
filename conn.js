var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    user:"root",
    password:"",
    database: "login"
});
console.log("mysql is connected ")

module.exports = conn;