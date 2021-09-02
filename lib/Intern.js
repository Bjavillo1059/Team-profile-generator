const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, education) {
        super(name, id, email)// already established in Employee.js
        this.education = education;// user input for education institution value
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.education;
    }
}

module.exports = Intern