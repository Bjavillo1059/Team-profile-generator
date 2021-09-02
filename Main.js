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
            if (role === "Intern") {
                memberRole = "school name info";
            } else if (role === "Engineer") {
                memberRole = "GitHub username info";
            } else {
                memberRole = "Enter Manager's office phone number"
            }
            inq.prompt([{
                type: "input",
                name: "memberRole",
                message: `Please input team member's ${memberRole}`
            },
            {
                name: "userChoice",
                type: "list",
                choices: [
                    "yes",
                    "no"
                ],
                message: "Would you like to add more members to your team?"
            }])        
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
                    addToHtml(newMember)
                        .then(function () {
                            if (userChoice === "yes") {
                                addMembers();
                            } else {
                                console.log("exitProgram")
                                writeHtml();
                            }
                        })
            });
    });                
}

buildHtml();

// start building a basic html with Bootstrap and Jquery for the development team members
function buildHtml() {
        const basicHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" >

        <link rel="stylesheet" href="assets/css/style.css">

        <title>Team Profile Info</title>
    </head>
    <body>
        <header class="jumbotron align-center">
            <h2 class="profile-header">Development Team Profiles & Info Summary</h2>
        </header>
    
        <section class="container"> 
            <div class="row">
                <div class="col-6"> </div> 
            </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>    
    </body>
    </html>
`;

                fs.writeFileSync("./displayed-html/devTeam.html", basicHtml, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                console.log("building development team html")

                fs.appendFile("./displayed-html/devTeam.html", basicHtml, (err) => {
                    if (err) {
                        console.log(err);
                    };
                });
                console.log("html written");
            
}

// trying to add to basicHtml / not working need more time!
function addToHtml(newTeamMember) {
    return new Promise(function(resolve, reject) {
        const name = newTeamMember.getName();
        const role = newTeamMember.getRole();
        const id = newTeamMember.getId();
        const email = newTeamMember.getEmail();
        let teamData = "";
        if (role === "Intern") {
            const school = newTeamMember.getEducation();
            teamData = `
            <div id="intCard" style="width: 20rem" class="card mx-auto">
                <h4 id="intCardHead" class="card-header"></h4>
                <h6>Intern: ${name}</h6>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">School Name: ${school}</li>
                    </ul>
            </div>`
        } else if (role === "Engineer") {
            const gitHub = newTeamMember.getGitHub();
            teamData = `
            <div id="engCard" style="width: 20rem" class="card mx-auto">
                <h4 id="engCardHead" class="card-header"></h4>
                <h6>Engineer: ${name}</h6>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                         <li class="list-group-item">GitHub: ${gitHub}</li>       
                    </ul>
            </div>`
        } else {
            const offPhoneNum = newTeamMember.getOfficeNumber();
            teamData = `
            <div id="manCard" style="width: 20rem" class="card mx-auto">
                <h4 id="manCardHead" class="card-header"></h4>
                <h6>Manager: ${name}</h6>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office Phone Number: ${offPhoneNum}</li>       
                    </ul>
            </div>`
        }
        fs.writeFileSync("./displayed-html/devTeam.html", basicHtml, (err) => {
            if (err) {
                return reject(err);
            };
            return resolve();
        })
    })
}

initializeApp();
