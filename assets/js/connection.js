//const mySQL = require('mysql2');

const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Temppass888!",
    database: "employee_manager_db"
    
});

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected to Database!'); 
});

module.exports = db;