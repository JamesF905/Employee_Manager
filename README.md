<div style="background:#222; border: 4px outset #333; padding:20px; font-family:arial">
<div id="top"></div>
<div align="center">
<a href="https://gist.github.com/JamesF905">
<img src="images/logo.png" alt="Logo" width="40%" style="border: 4px inset #444; background:#333; border-radius: 20px">
</a>

# Employee Manager

<p align="center">
  An employee manager app that uses node.js, npm inquirer, and MySql. <br><br>By: <a href="https://github.com/JamesF905" target="_blank"><strong>James Fidlin</strong></a><br/>July, 21, 2022
</p>
<br />

### Walkthrough Video Link

<p align="center">
    <a href=""><strong></strong></a>
</p>

### Repo Link

<p align="center">
    <a href="https://github.com/JamesF905/Employee_Manager"><strong>https://github.com/JamesF905/Employee_Manager</strong></a>
</p>
<br />
</div>

## About The Project

[![Employee_Manager][product-screenshot]](https://github.com/JamesF905/Employee_Manager)

This challenge requires me to create a command line application that will allow a user to view and edit their employees, departments, and rolls. It uses node.js as a backend and npm inquirer as a prompt, to send and recieve data from a MySql database.
<br /><br />

## Contents
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Technology Used](#Technology-Used)
* [Installation](#Installation-Instructions)
* [About the Author](#About-the-Author)
<br/><br/>

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Technology Used 

* [Javascript](https://www.javascript.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git Hub](https://github.com/)
* [Git Bash](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [node.js fs module](https://nodejs.dev/learn/the-nodejs-fs-module)
* [npm inquirer](https://www.npmjs.com/package/inquirer)
* [express.js](https://expressjs.com/)
* [Heroku](https://www.heroku.com/)

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## Installation Instructions 

1) Install GitBash

2) Install Node.js

3) Clone this repo

4) Run GitBash from your cloned folder

5) type "npm i" in GitBash

6) type "node index.js" in GitBash to start the application and fill out the form, an index.html file will be generated and stored in the "dist/" folder

7) type "npm run test" to run the jest test suites

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## About the Author

James Fidlin is a Junior Full Stack Web Developer, studying at the University of Toronto's School for Continuing Education, in the Full Stack Web Development Program. You can connect with James, using any of the links below.
<br/><br/>

[![LinkedIn][linkedin-shield]][linkedin-url] [![Gmail][gmail-shield]][Gmail-url] [![Github][Github-shield]][Github-url]

<br/>

<p align="center"><a href="#contents">(back to top)</a></p>
</div>



[Gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:jameslfidlin@gmail.com?

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/james-fidlin-98853a239/

[Github-shield]: https://img.shields.io/badge/Github-white?style=for-the-badge&logo=Github&logoColor=222
[Github-url]: https://github.com/JamesF905

[product-screenshot]: images/Project_Screenshot.gif