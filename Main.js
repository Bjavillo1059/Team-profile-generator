// add variables to require information from dependant documentation
const fs = require('fs');
const inq = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employee = [];

// function to initialize application
function initializeApp() {
    // buildHtml();
    addMembers();
}

// function to creat information for adding members to the team
function addMembers() {
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
            inq.prompt([{
                type: "input",
                name: "memberRole",
                message: `Team member's ${memberRole}`
            },
            {
                name: "userChoice",
                type: "list",
                message: "Would you like to add more members to your team?",
                choices: [
                    "yes",
                    "no"
                ]
            },
            ])
                .then(function ({ memberRole, userChoice }) {
                    let newMember;
                    if (memberRole.userChoice === "Intern") {
                        newMember = new Intern(name, id, email, memberRole)
                        addMembers();
                    } else if (memberRole.userChoice === "Engineer") {
                        newMember = new Engineer(name, id, email, memberRole)
                        addMembers();
                    } else (memberRole.userChoice === "Manager") 
                        newMember = new Manager(name, id, email, memberRole)
                        addMembers();
                    
                    employee.push(newMember);
                    addtoHtml(newMember)
                    .then(function() {
                        if (userChoice === "yes") {
                            addMembers();
                        } else 
                            console.log("exitProgram")                        
                    })
                });

function buildHtml() {
    let basicHtml = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

}
                    
            // .then(function ({ memberRole, addNewMembers }) {
            //     const newMember;
            //     if (role === "Engineer") {
            //         newMember = new Engineer(name, id, email, memberRole)
            //     }
            // })
        })
    // {
    //     type: "input",
    //         name: "number",
    //             message: "Enter Manager's office number"
    // },
    // .then(managerRole => {
    //     const manager = new Manager(managerRole.name, managerRole.id, managerRole.email, managerRole.number) // needs to be declared with values
    //     employee.push(manager) // makes employee an array of 1 manager object
    //     askToAddMember();
    // })
    //     .then(engineerRole => {
    //         const engineer = new Engineer(engineerRole.name, engineerRole.id, engineerRole.email, engineerRole.gitHub)
    //         employee.push(engineer) // makes employee an array of an engineer object
    //         askToAddMember();
    //     })
    //     .then(internRole => {
    //         const intern = new Intern(internRole.name, internRole.id, internRole.email)
    //         employee.push(intern) // makes employee an array of an intern object
    //         askToAddMember();
    //     })
}

// }

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

initializeApp();

// add more members
// 