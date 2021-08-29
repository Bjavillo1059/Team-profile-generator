// set test for the Employee js and its corresponding functions
const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe ("inilization", () => {
    it("should create an employee object if presented with valid arguments", () => {
        const employee = new Employee ("Brandon", "1", "test@test.com")
        expect(employee.name).toEqual("Brandon")
        expect(employee.id).toEqual("1")
        expect(employee.email).toEqual("test@test.com")
    });

    it("should return employee name with getName function", () => {
        const employee = new Employee ("Brandon", "1", "test@test.com")
        expect(employee.getName()).toEqual("Brandon")
    });

    it("should return employee id with getId function", () => {
        // const employCount = 50 // trying to set a max limit count for employees / broken will study more and fix later
        const employee = new Employee ("Brandon", "1", "test@test.com")
        expect(employee.getId()).toEqual("1")
        // expect(employee.getId()).toEqual(number) // test for max limit of employees / broken will study more and fix later
    });

    it("should return employee email with getEmail function", () => {
        const employee = new Employee ("Brandon", "1", "test@test.com")
        expect(employee.getEmail()).toEqual("test@test.com") 
    });
    
    it("should return employee rold with getRole function", () => {
        let testEmpRole = "Employee"
        const employee = new Employee ("Brandon", "1", "test@test.com")
        expect(employee.getRole()).toEqual(testEmpRole)
    })

    it("should return employee object information with Employee class", () => {
        const employee = new Employee ("Brandon", "1", "test@test.com")
        expect(typeof(employee)).toEqual("object")
    })
})