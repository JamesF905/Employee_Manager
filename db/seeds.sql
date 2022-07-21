INSERT INTO department (name)
VALUES 
    ("IT"),
    ("Human Resources"),
    ("Public Relations"),
    ("Accounting"),
    ("Employee Moral"),
    ("Marketing"),
    ("Managment"),
    ("Sales");

INSERT INTO roll (title, salasry, department_id)
VALUES 
    ("Network Specialist", 60000, 1),
    ("Front End Developer", 40000, 1),
    ("Back End Developer", 50000, 1),
    ("IT Manager", 80000, 1),
    ("Child Watcher", 100000, 5),
    ("Sales Specialist", 60000, 8),
    ("Sales Manager", 70000, 8), 
    ("Accountant", 60000, 4),
    ("Accountant Manager", 70000, 4),
    ("CEO", 1000000, 7),
    ("CFO", 900000, 7),
    ("COO", 800000, 7),
    ("Marketing Strategist", 60000, 6),
    ("Marketing Manager", 70000, 6),
    ("PR Manager", 50000, 3),
    ("Press Secretary", 40000, 3),
    ("HR Manager", 50000, 2),
    ("HR Consultant", 35000, 2),
    ("Joke Teller", 200000, 5),
    ("Moral Manager", 300000, 5),
    ("Coffee Runner", 1000001, 5);

INSERT INTO employeee (first_name, last_name, role_id, manager_id)
VALUES 
    ("John", "Snow", 1, 4),
    ("Eddard", "Stark", 2, 4),
    ("Babe", "Ruth", 3, 4),
    ("George", "Washington", 4, NULL),
    ("Frodo", "Baggins", 5, 20),
    ("Sam", "Gamgee", 6, 7),
    ("Will", "Smith", 7, NULL),
    ("Matt", "Damon", 8, 9),
    ("Derek", "Jeter", 9, NULL),
    ("Joe", "Carter", 10, NULL),
    ("Dwain", "Ward", 11, 10),
    ("John", "Olerud", 12, 10),
    ("Roberto", "Alomar", 13, 14),
    ("Tony", "Stark", 14, NULL),
    ("Bret", "Smith", 15, NULL),
    ("Bo", "Bichette", 16, 15),
    ("Mike", "Scott", 17, NULL),
    ("Steve", "Austin", 18, 17),   
    ("Jules", "Vern", 19, 20),
    ("Skip", "Baless", 20, NULL),
    ("Mookie", "Betts", 21, 20);