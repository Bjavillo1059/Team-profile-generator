const Employee = require('./Employee');

class Designer extends Employee {
    constructor(name, id, email, education) {
        super(name, id, email)
        this.education = education;
    }

    getRole() {
        return 'Designer';
    }

    getEducation() {
        return this.education;
    }
}

module.exports = Designer