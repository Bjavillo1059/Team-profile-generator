const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); // super is being imported from Employee.js
        this.officeNumber = officeNumber; // is extended onto what Employee already established
    }

    getRole() {
        return 'Manager';
    }

    getofficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager