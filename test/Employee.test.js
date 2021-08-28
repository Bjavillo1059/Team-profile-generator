const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe ("inilization", () => {
    it("should create an employee object if presented with valid arguments", () => {
        const employee = new Employee ("Brandon", "1", "brandonjavillo@gmail.com")
        expect(employee.name).toEqual("Brandon")
        expect(employee.id).toEqual("4")
        expect(employee.email).toEqual("br@gmail.com")
    });

    it("should return employee name with getName function", () => {
        const employee = new Employee ("Brandon", "1", "brandonjavillo@gmail.com")
        expect(employee.getName()).toEqual("Brandon")
    });

    it("should return employee id with getId function", () => {
        const employee = new Employee ("Brandon", "1", "brandonjavillo@gmail.com")
        expect(employee.getId()).toEqual("1")
    });

    it("should return employee email with getEmail function", () => {
        const employee = new Employee ("Brandon", "1", "brandonjavillo@gmail.com")
        expect(employee.getEmail()).toEqual("brandonjavillo@gmail.com") 
    });

    it("should return employee object information with Employee class", () => {
        const employee = new Employee ("Brandon", "1", "brandonjavillo@gmail.com")
        expect(Employee()).toEqual(Employee)
    })
})