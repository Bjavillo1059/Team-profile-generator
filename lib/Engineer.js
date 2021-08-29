const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email); // already established in Employee.js
        this.gitHub = gitHub; // user input for gitHub value
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer