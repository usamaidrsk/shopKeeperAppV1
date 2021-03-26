// @ts-nocheck
'use strict';
var _this = this;
var mysql = require('mysql');
var db = {
    connection: null,
    connect: function () {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'labs'
        });
        _this.connection = connection;
        _this.connection.connect(function (err) {
            if (err) {
                console.log("Error connecting to Db: " + err);
                return;
            }
            console.log('Connection established');
        });
        return;
    },
    endConnection: function () {
        connection.end(function (err) {
            console.log(err);
            // The connection is terminated gracefully
            // Ensures all remaining queries are executed
            // Then sends a quit packet to the MySQL server.
        });
    },
    // this is the general querying functions
    query: function (sql) {
        var response = this.connection.query(sql, function (err, results, fields) {
            if (err) {
                throw err;
            }
            else {
                return results;
            }
        });
        console.log(response);
        return response;
    },
    auth: {
        // auth functions shall go here
        signUp: function () {
        },
        logIn: function () {
        }
    },
    products: {
    // products inventory, stock  functions shall go here
    },
    sales: {
    // daily sales  functions shall go here
    },
    reports: {
    // sales reports  functions shall go here
    }
};
db.connect();
db.query('SELECT * FROM staff');
exports.db = db;
