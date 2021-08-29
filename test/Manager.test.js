// set test for Manager js and its corresponding functions set
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return manager office number set by constructor", () => {
        let testNum = 1234567890;
        const e = new Manager("Boss", 1, "test@test.com", testNum);
        expect(e.officeNumber).toEqual(testNum);
    });
    
    it("should return 'Manager' role with getRole function", () => {
        const testManRole = "Manager";
        const e = new Manager("Boss", 1, "test@test.com", 1234567890);
        expect(e.getRole()).toEqual(testManRole);
    });
    
    it("should return office number wtih getOfficeNumber function", () => {
        let testNum = 1234567890;
        const e = new Manager("Boss", 1, "test@test.com", testNum);
        expect(e.getOfficeNumber()).toEqual(testNum);
    });
});