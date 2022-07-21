const db = require("./config/connection"); // Get the database cennection
const inquirer = require('inquirer'); //import inquirer
const ezTable = require('easy-table'); //import easy table


function main_menu(){
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team', 'Exit'],
    })
    .then(menu => {
        if (menu.choice !== "Exit") {
            console.log(`${menu.choice} was selected`);
        }else{
            console.log("See Ya!");
            process.exit();
        }
    })        
}

main_menu();