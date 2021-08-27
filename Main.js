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
const Engineer = require('./lib/Engineer');
const Developer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Designer = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employee = [];

// function to initialize application
function initializeApp() {
    buildHtml();
    addEmployee();
}

// function to creat information for adding members to the team
function addManager() {
    // array listing of questions for team member summary information
    inq.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter a Team member's name"
        },
        {
            type: "list",
            name: "role",
            message: "Select a role for Team member",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee Id"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Team member's email information"
        },
    ])

        .then(function ({ name, role, id, email }) {
            let memberRole = "";
            if (role === "Engineer") {
                memberRole = "GitHub username info";
            } else if (role === "Intern") {
                memberRole = "school name info";
            } else {
                memberRole = "Enter Manager's office phone number"
            }
        })
    {
        type: "input",
            name: "number",
                message: "Enter Manager's office number"
    },
    .then(managerRole => {
        const manager = new Manager(managerRole.name, managerRole.id, managerRole.email, managerRole.number) // needs to be declared with values
        employee.push(manager) // makes employee an array of 1 manager object
        askToAddMember();
    })
    .then(engineerRole => {
        const engineer = new Engineer(engineerRole.name, engineerRole.id, engineerRole.email, engineerRole.gitHub)
        employee.push(engineer) // makes employee an array of an engineer object
        askToAddMember();
    })
    .then(internRole => {
        const intern = new Intern(internRole.name, internRole.id, internRole.email)
        employee.push(intern) // makes employee an array of an intern object
        askToAddMember();
    })
}

function askToAddMember() {
    inq.prompt({
        name: "userChoice",
        type: "list",
        message: "Would you like to add more members to your team?",
        choices: [
            "add an Intern",
            "add an Engineer",
            "create HTML"
        ]
    })
        .then(memberRole => {
            if (memberRole.userChoice === "add an Intern") {
                addMembers();
            } else if (memberRole.userChoice === "add an Engineer") {
                addMembers()
            } else {
                console.log("exitProgram")
            }
        })
}

// function addMembers() {
//     inq.prompt ([
//         {
//             type: "input",
//             name: "name",
//             message: "Enter a Manager's name"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Enter employee Id"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter Manager's email"
//         },
//         {
//             type: "list",
//             name: "role",
//             choices: [
//                 "Developer",
//                 "Designer",
//                 "Manager"
//             ],
//             message: "Select one of the following for the member's role"
//         },
//     ])
//     .then(engineerRole => {
//         const manager = new Engineer (engineerRole.name, engineerRole.id, engineerRole.email) 
//         employee.push(engineer) // makes employee an array of an engineer object
//         askToAddMember();        
//     })    
//     .then(internRole => {
//         const manager = new Intern (internRole.name, internRole.id, internRole.email)
//         employee.push(engineer) // makes employee an array of an engineer object
//         askToAddMember();        
//     })    
// }

addManager();
addMembers();

// add more members
// 