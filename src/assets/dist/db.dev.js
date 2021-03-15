// @ts-nocheck
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mysql = require('mysql');

var DB =
/*#__PURE__*/
function () {
  function DB() {
    _classCallCheck(this, DB);

    connection: null;
  }

  _createClass(DB, [{
    key: "connect",
    value: function connect() {
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
      }); // return connection;
    }
  }, {
    key: "endConnection",
    value: function endConnection() {
      this.connection.end(function (err) {
        throw err; // The connection is terminated gracefully
        // Ensures all remaining queries are executed
        // Then sends a quit packet to the MySQL server.
      });
    } // this is the general querying functions

  }, {
    key: "query",
    value: function query(sql) {
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
    }
  }, {
    key: "auth",
    value: function auth() {
      var self = this; // auth functions shall go here

      return {
        signUp: function signUp() {// signup function
        },
        logIn: function logIn() {
          //  log in function
          self.query('SELECT * FROM branchs');
        }
      };
    }
  }, {
    key: "products",
    value: function products() {
      // products inventory, stock  functions shall go here
      return {};
    }
  }, {
    key: "sales",
    value: function sales() {
      // daily sales  functions shall go here
      return {};
    }
  }, {
    key: "reports",
    value: function reports() {
      // sales reports  functions shall go here
      return {};
    }
  }]);

  return DB;
}();

;
var db = new DB();
db.connect();
db.query('SELECT * FROM staff');
db.auth().logIn();
module.exports.DB = DB;