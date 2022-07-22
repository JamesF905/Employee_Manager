const db = require("./config/connection"); // Get the database cennection
const inquirer = require('inquirer'); //import inquirer
const ezTable = require('easy-table'); //import easy table

const {viewDepartments, viewRoles, viewEmployees} = require('./assets/js/viewScripts');
const {addDepartment, addRole, addEmployee} = require('./assets/js/addScripts');


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
            main_menu();
        }else{
            console.log("See Ya!");
            process.exit();
        }
    })        
}

main_menu();