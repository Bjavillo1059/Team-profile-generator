const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, workNumber) {
        super (name, id, email); // super is being imported from Employee.js
        this.workNumber = workNumber; // is extended onto what Employee already established
    }

    getRole() {
        return 'Manager';
    }

    getWorkNumber() {
        return this.workNumber;
    }
}

module.exports = Manager