const db = require("./config/connection"); // Get the database cennection
//const mySQL = require('mysql2'); // import mysql
const inquirer = require('inquirer'); //import inquirer
const ezTable = require('easy-table'); //import easy table
/*
const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Temppass888!",
    database: "employee_manager_db"
    
});

db.connect(function (err) {
    err ?  console.log(err) : console.log('Connected to Database!');
});*/