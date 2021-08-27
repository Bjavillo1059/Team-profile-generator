const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe ("inilization", () => {
    it("should create an employee object if presented with valid arguments", () => {
        const employee = new Employee ("Brandon", "4", "br@gmail.com")
        expect(employee.name).toEqual("Brandon")
        expect(employee.id).toEqual("4")
        expect(employee.email).toEqual("br@gmail.com")
    });

    it("should return employee name with getName function", () => {
        const employee = new Employee ("Brandon", "4", "br@gmail.com")
        expect(employee.getName()).toEqual("Brandon")
    })
})