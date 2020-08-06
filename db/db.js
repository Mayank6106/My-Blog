const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "parassharma123@",
    database: "myblog",
    multipleStatements: true
});

mySqlConnection.connect(err => {
    if (err) console.log(err);
    else console.log("Database Connected!");
});

module.exports = mySqlConnection;