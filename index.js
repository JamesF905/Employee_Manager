const inquirer = require('inquirer'); //import inquirer
require('console.table');
const mySQL = require('mysql2'); // import mysql
require('dotenv').config(); // import in order to use dotenv to pull database credentials from the env file
const db = mySQL.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
    
});

//Connect to database

db.connect(function (err) {
    if(err){
        console.log(err)
    }else{
        console.log(`Connected to Database!`)
        main_menu();
    };
});

//sets queries to use in the menu function

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

//function to start the main menu

function main_menu(){
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Exit'],
    })
    .then(menu => {
        if (menu.choice !== "Exit") {
            menu.choice === "View all Departments" ? viewThem("Departments", sql_query.departments) :
            menu.choice === "View all Roles" ? viewThem("Roles", sql_query.roles) :
            menu.choice === "View all Employees" ? viewThem("Employees", sql_query.employees) :
            menu.choice === "Add a Department" ? addDepartment() :
            menu.choice === "Add a Role" ? addRole() :
            menu.choice === "Add an Employee" ? addEmployee() :
            menu.choice === "Update an Employee" ? updateEmployee() :
            null;
        }else{
            console.log("See Ya!");
            process.exit();
        };
    });        
};

//function to handle all use requests

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

// function to add a department

function addDepartment(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the name?`,
      }         
    ])
    .then((res) => {
        db.query(`INSERT INTO department (name) VALUES ("${res.name}")`, (err, res) => {
            err ? console.log(err) : console.log("added!");
            main_menu();
        })
    })
}

//function to add a roll

function addRole(){
    let choices = [];
    db.query(`SELECT name, id FROM department`, (err, res) => {
        if(!err){
            for(i=0;i<res.length;i++){
                choices.push({name: res[i].name, value: res[i].id})
            };
        } else {
            console.log(err);
        }      
    })

    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the title of the role?`,
      },
      {
        type: 'input',
        name: 'salary',
        message: `What is the salary?`,
      },
      {
        type: 'list',
        name: 'department',
        message: `What department does it belong to?`,
        choices: choices,
      }          
    ])
    .then((res) => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES("${res.name}", ${res.salary}, ${res.department})`, (err, res) => {
            err ? console.log(err) : console.log("added!");
            main_menu();
        })
    })
}

//function to add an employee

function addEmployee(){
    let choices = [];
    db.query(`SELECT title, id FROM roles`, (err, res) => {
        if(!err){
            for(i=0;i<res.length;i++){
                choices.push({name: res[i].title, value: res[i].id})
            };
        } else {
            console.log(err);
        };      
    })

    let employees = [];
    db.query(`SELECT first_name, last_name, id FROM employee`, (err, res) => {
        if(!err){
            employees.push({name: `NO MANAGER`, value: null});
            for(i=0;i<res.length;i++){
                employees.push({name: `${res[i].first_name} ${res[i].last_name}`, value: res[i].id})
            };
        } else {
            console.log(err);
        };    
    })

    inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: `What is their first name`,
      },
      {
        type: 'input',
        name: 'last_name',
        message: `What is their last name`,
      },
      {
        type: 'list',
        name: 'role',
        message: `What is their roll?`,
        choices: choices,
      },
      {
        type: 'list',
        name: 'manager',
        message: `Who is their manager?`,
        choices: employees,
      }   
    ])
    .then((res) => {
        db.query(`INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES("${res.first_name}", "${res.last_name}", ${res.role}, ${res.manager})`, (err) => {
            err ? console.log(err) : console.log("added!");
            main_menu();
        })
    })
}

//function to update an employee

function updateEmployee(){
    let employees = [];
    db.query(`SELECT * FROM employee`, (err, res) => {
        if(!err){
            for(i=0;i<res.length;i++){
                //console.log(res[i].first_name);
                employees.push({name: `${res[i].first_name} ${res[i].last_name}`, value: res[i].id});
            };  
        } else {
            console.log(err);
        };

        inquirer
        .prompt([
            {
                type: 'list',
                name: 'emp_id',
                message: `Who do you want to Update?`,
                choices: employees,
            }  
        ])
        .then((res1) => {
            let role_choices = [];
            db.query(`SELECT * FROM roles`, (err, res) => {
                if(!err){
                    for(i=0;i<res.length;i++){
                        //console.log(res[i].first_name);
                        role_choices.push({name: `${res[i].title}`, value: res[i].id});
                    };  
                } else {
                    console.log(err);
                };
                
                inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: `What is their new roll?`,
                        choices: role_choices,
                    }  
                ])
                .then((res2) => {
                    db.query(`UPDATE employee SET roles_id = ${res2.role} WHERE id = ${res1.emp_id}`, (err) => {
                        err ? console.log(err) : console.log("updated!");
                        main_menu();
                    });                   
                });  
            });
            
        });  
    });
}   