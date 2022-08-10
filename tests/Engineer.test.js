const fs = require("fs");
const Engineer = require("../classes/Engineer");

jest.mock("fs");

describe("Engineer", () => {
  describe("Constructor", () => {
    it("Should call properly construct a new Engineer", () => {
      const testEmp = new Engineer(1,2,3,4);

      expect(testEmp).toBeInstanceOf(Engineer)
    });
  });

  describe("GetName", () => {
    it("It should return the name of the Engineer", () => {
        const testEmp = new Engineer("bob",2,3,3);

      expect(testEmp.getName()).toEqual("bob")
    });
  });

  describe("GetEmail", () => {
    it("It should return the email of the Engineer", () => {
        const testEmp = new Engineer("bob","emailtest@gmail.com",3,3);

        expect(testEmp.getEmail()).toEqual("emailtest@gmail.com")
    });
    
  });
  describe("GetID", () => {
    it("It should return the ID of the Engineer", () => {
        const testEmp = new Engineer("bob","emailtest@gmail.com",3,3);

        expect(testEmp.getID()).toEqual(3);
    });
});
    describe("GetRole", () => {
        it("It should return the Role of the Engineer", () => {
            const testEmp = new Engineer("bob","emailtest@gmail.com",3,3);
            expect(testEmp.getRole()).toEqual("Engineer");
        });
    
  });
  describe("GetGithub", () => {
    it("It should return the Role of the Engineer", () => {
        const testEmp = new Engineer("bob","emailtest@gmail.com",3,3);
        expect(testEmp.getGithub()).toEqual(3);
    });

});
});