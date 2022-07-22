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

const sql_query = {
    departments : `SELECT * FROM department ORDER BY id;`,
    roles : `SELECT roles.title, roles.id, department.name AS department, roles.salary FROM roles JOIN department ON department.id = roles.department_id`,
    employees : `
    SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    roles.title,  
    department.name AS department,
    roles.salary, 
    employee.manager_id AS manager
    FROM employee
    JOIN roles ON roles.id = employee.roles_id 
    JOIN department ON department.id = roles.department_id ORDER BY employee.id`
};

function main_menu(){
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Exit'],
    })
    .then(menu => {
        if (menu.choice !== "Exit") {
            menu.choice === "View all Departments" ? viewThem("Departments", sql_query.departments) :
            menu.choice === "View all Roles" ? viewThem("Roles", sql_query.roles) :
            menu.choice === "View all Employees" ? viewThem("Employees", sql_query.employees) :
            menu.choice === "Add a Department" ? addDepartment() :
            menu.choice === "Add a Role" ? addRole() :
            menu.choice === "Add an Employee" ? addEmployee() :
            menu.choice === "Add an Employee" ? updateEmployee() :
            null;
        }else{
            console.log("See Ya!");
            process.exit();
        };
    });        
};

function queryPoster(){

}

function viewThem(table_name,query){
    db.query(query, (err, res) => {
        if(!err){
            console.log(`\n${table_name}\n`); 
            // This is a workaround for the self join of manager not working when querying the employees table
            if (table_name === "Employees"){
                for(i=0;i<res.length;i++){
                    let target_key = Object.keys(res).find(key => res[key].id === res[i].manager);
                    res[i].manager = target_key ? `${res[target_key].first_name} ${res[target_key].last_name}` : "";
                }
            }
            console.table(res)
            main_menu();
        }else{
            console.log(err);
        }
    });
}

function addDepartment(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is ${grammah} name?`,
      },
      {
        type: 'number',
        name: 'employee_ID',
        message: `Please enter ${grammah} Employee ID.`,
      },
      {
        type: 'input',
        name: 'email_address',
        message: `Enter ${grammah} email address.`,
      },
      {
        type: `${unique_input_type}`,
        name: 'unique',
        message: `${unique_message}`,
      },         
    ])
}

function addRole(){
    
}

function addEmployee(){
    
}

function updateEmployee(){
    
}

