// set test for Intern js and its corresponding functions set
const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("should return school name or institution set by constructor", () => {
        const testEd = "UC Davis";
        const e = new Intern("NoobSauce", 3, "test@test.com", testEd);
        expect(e.education).toEqual(testEd);
    });

    it("should return 'Intern' role with getRole function", () => {
        const testInRole = "Intern";
        const e = new Intern("NoobSauce", 3, "test@test.com", "UC Davis");
        expect(e.getRole()).toEqual(testInRole);
    });

    it("should return institution with the getEducation function", () => {
        const testEd = "UC Davis";
        const e = new Intern("NoobSauce", 3, "test@test.com", testEd);
        expect(e.getSchool()).toEqual(testEd);
    })
});