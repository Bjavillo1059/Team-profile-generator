const Employee = require('./Employee');

class Developer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email); // already established in Employee.js
        this.gitHub = gitHub; // user input for gitHub value
    }

    getRole() {
        return 'Developer';
    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Developer