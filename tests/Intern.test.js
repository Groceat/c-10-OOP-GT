const fs = require("fs");
const Intern = require("../classes/Intern");


jest.mock("fs");

describe("Intern", () => {
  describe("Constructor", () => {
    it("Should call properly construct a new Intern", () => {
      const testEmp = new Intern(1,2,3,4);

      expect(testEmp).toBeInstanceOf(Intern)
    });
  });

  describe("GetName", () => {
    it("It should return the name of the Intern", () => {
        const testEmp = new Intern("bob",2,3,3);

      expect(testEmp.getName()).toEqual("bob")
    });
  });

  describe("GetEmail", () => {
    it("It should return the email of the Intern", () => {
        const testEmp = new Intern("bob","emailtest@gmail.com",3,3);

        expect(testEmp.getEmail()).toEqual("emailtest@gmail.com")
    });
    
  });
  describe("GetID", () => {
    it("It should return the ID of the Intern", () => {
        const testEmp = new Intern("bob","emailtest@gmail.com",3,3);

        expect(testEmp.getID()).toEqual(3);
    });
});
    describe("GetRole", () => {
        it("It should return the Role of the Intern", () => {
            const testEmp = new Intern("bob","emailtest@gmail.com",3,3);
            expect(testEmp.getRole()).toEqual("Intern");
        });
    
  });
  describe("GetGithub", () => {
    it("It should return the Role of the Engineer", () => {
        const testEmp = new Intern("bob","emailtest@gmail.com",3,3);
        expect(testEmp.getCollege()).toEqual(3);
    });

});
});