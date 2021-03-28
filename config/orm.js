const { query } = require("./connection.js");
const connection = require("./connection.js");

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objectSql(ob) {
    let arr = [];

    for (let key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

const orm = {
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO" + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb (result);
        });
    },

    update: function(table, objCV, condition, cb) {
        let queryString = "UPDATE" + table;
        queryString += "SET";
        queryString += objectSql(objCV);
        queryString += "WHERE";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};



module.exports = orm;