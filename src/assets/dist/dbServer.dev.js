// @ts-nocheck
'use strict';

var mysql = require('mysql');

var DB = {
  connection: null,
  connect: function connect() {
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'labs'
    });
    this.connection = connection;
    this.connection.connect(function (err) {
      if (err) {
        console.log("Error connecting to Db: ".concat(err));
        return;
      }

      console.log('Connection established');
    });
  },
  endConnection: function endConnection() {
    this.connection.end(function (err) {
      console.log(err); // The connection is terminated gracefully
      // Ensures all remaining queries are executed
      // Then sends a quit packet to the MySQL server.
    });
  },
  // this is the general querying functions
  query: function query(sql) {
    this.connection === null ? this.connect() : this.connection = this.connection;
    var response;
    response = this.connection.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        console.log(results);
        return results;
      }
    });
    return response;
  },
  auth: function auth() {
    var self = this; // auth functions shall go here

    return {
      signUp: function signUp() {// signup function
      },
      logIn: function logIn() {
        //  log in function
        self.query('SELECT * FROM branchs');
      }
    };
  },
  products: function products() {
    // products inventory, stock  functions shall go here
    return {};
  },
  sales: function sales() {
    // daily sales  functions shall go here
    return {};
  },
  reports: function reports() {
    // sales reports  functions shall go here
    return {};
  }
};
exports.DB = DB;