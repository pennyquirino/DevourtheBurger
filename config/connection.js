const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "Monkeymoo602!",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connections: " + err.stack);
        return;
    }
    console.log("connected to " + connection.threadId);
});



module.exports = connection;