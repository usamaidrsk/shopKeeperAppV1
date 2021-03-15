// @ts-nocheck
'use strict';
const mysql = remote.require('mysql');

const DB = {
  connection: null,
  connect() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'labs'
    });
    this.connection = connection;
    this.connection.connect((err) => {
      if (err){
        console.log(`Error connecting to Db: ${err}`);
        return;
      }
      console.log('Connection established');
    });
  },

  endConnection() {
    this.connection.end((err) => {
      console.log(err);
      // The connection is terminated gracefully
      // Ensures all remaining queries are executed
      // Then sends a quit packet to the MySQL server.
    });
  },

  // this is the general querying functions
  query(sql) {
    this.connection === null ? this.connect() : this.connection = this.connection;
    let response;
    response = this.connection.query(sql, (err, results, fields) => {
      if (err) {
        throw err;
      } else {
        console.log(results)
        return results; 
      }
    });
    return response;
  },

  auth() {
    const self = this;
    // auth functions shall go here
    return {
      signUp: () => {
        // signup function
      },
      logIn: () => {
        //  log in function
        self.query('SELECT * FROM branchs')
      }
    }
  },

  products() {
    // products inventory, stock  functions shall go here
    return {

    }
  },

  sales() {
    // daily sales  functions shall go here
    return {
      
    }
  },

  reports() {
    // sales reports  functions shall go here
    return {
      
    }
  }
};

exports.DB = DB;