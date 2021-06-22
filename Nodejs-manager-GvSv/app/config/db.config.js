//var mysql = require('mysql');
//var migration = require('mysql-migrations');
module.exports = {
    HOST: "localhost",
    PORT:3306,
    USER: "root",
    PASSWORD: "",
    DB: "school",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };