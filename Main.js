// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// add variables to require information from dependant documentation
const fs = require('fs');
const inq = require('inquirer');
const Developer = require('./lib/Developer');
const Designer = require('./lib/Designer');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const employee = [];

// function to initialize application
function initializeApp() {
    buildHtml();
    addEmployee();
}

// function to creat information for adding members to the team
function addMember() {
    // array listing of questions for team member summary information
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter a team member's name"
        },
        {
            type: "list",
            name: "role",
            choices: [
                "Developer",
                "Designer",
                "Manager"
            ],
            message: "Select on of the following for the member's role"
        }
    ])
}