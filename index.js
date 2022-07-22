//const db = require("./config/connection"); // Get the database cennection
const inquirer = require('inquirer'); //import inquirer
//const Table = require('easy-table');
require('console.table');
const mySQL = require('mysql'); // import mysql
require('dotenv').config(); // import in order to use dotenv to pull database credentials from the env file
const db = mySQL.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
    
});

db.connect(function (err) {
    //err ? console.log(err) : console.log(`Connected to Database!`); // error handler/success log
    if(err){
        console.log(err)
    }else{
        console.log(`Connected to Database!`)
        main_menu();
    };
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
            menu.choice === "View all Departments" ? viewThem("Department", "id") :
            menu.choice === "View all Roles" ? viewThem("Roles") :
            menu.choice === "View all Employees" ? viewThem("Employees") :
            menu.choice === "Add a Department" ? addDepartment() :
            menu.choice === "Add a Role" ? addRole() :
            menu.choice === "Add an Employee" ? addEmployee() :
            null;
        }else{
            console.log("See Ya!");
            process.exit();
        };
    });        
};



function viewThem(name,o){
    order = o ? ` ORDER BY ${o}` : '';
    db.query(`SELECT * FROM ${name}${order};`, (err, res) => {
        if(!err){
            console.log("\nDepartment\n");
            console.table(res)
            main_menu();
        }else{
            console.log(err);
        }
    });
}

function viewDepartments(){
    db.query(`SELECT * FROM department ORDER BY id;`, (err, res) => {
        console.log("Department\n");
        console.table(res)
        main_menu();
    });
    //console.table(`\n`);   
}

function viewRoles(){
    console.log("You selected view Roles");
}

function viewEmployees(){
    console.log("You selected view Employees");
}