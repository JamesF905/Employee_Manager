//const db = require("./config/connection"); // Get the database cennection
const inquirer = require('inquirer'); //import inquirer
const cTable = require('console.table'); //import console.table
const mySQL = require('mysql2'); // import mysql
require('dotenv').config(); // import in order to use dotenv to pull database credentials from the env file
const db = mySQL.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
    
});

db.connect(function (err) {
    err ? console.log(err) : console.log(`Connected to Database!`); // error handler/success log
});


//const {viewDepartments, viewRoles, viewEmployees} = require('./assets/js/viewScripts');
//const {addDepartment, addRole, addEmployee} = require('./assets/js/addScripts');


function main_menu(){
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Exit'],
    })
    .then(menu => {
        if (menu.choice !== "Exit") {
            menu.choice === "View all Departments" ? viewDepartments() :
            menu.choice === "View all Roles" ? viewRoles() :
            menu.choice === "View all Employees" ? viewEmployees() :
            menu.choice === "Add a Department" ? addDepartment() :
            menu.choice === "Add a Role" ? addRole() :
            menu.choice === "Add an Employee" ? addEmployee() :
            null;
            //main_menu();
        }else{
            console.log("See Ya!");
            process.exit();
        }
    })        
}

main_menu();

function viewDepartments(){
    console.log("You selected view Department");
    db.query(`SELECT id, name FROM department;`, (err, res) => err ? console.log(err) : console.table(res));
    //main_menu();
    console.table(`\n`);   
}

function viewRoles(){
    console.log("You selected view Roles");
}

function viewEmployees(){
    console.log("You selected view Employees");
}