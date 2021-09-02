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