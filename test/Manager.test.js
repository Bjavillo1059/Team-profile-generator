const { describe } = require("yargs");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return manager office number set by constructor", () => {
        const testNum = 1234567890;
        const e = new Manager("Boss", 1, "test@test.com", testNum);
        expect(e.officeNumber).toEqual(testNum);
    });

    it("should return")

})