const fs = require("fs");
const Manager = require("../classes/Manager");

jest.mock("fs");

describe("Manager", () => {
  describe("Constructor", () => {
    it("Should call properly construct a new Manager", () => {
      const testEmp = new Manager(1,2,3,4);
      expect(testEmp).toBeInstanceOf(Manager)
    });
  });

  describe("GetName", () => {
    it("It should return the name of the Manager", () => {
        const testEmp = new Manager("bob",2,3,4);
      expect(testEmp.getName()).toEqual("bob")
    });
  });

  describe("GetEmail", () => {
    it("It should return the email of the Manager", () => {
        const testEmp = new Manager("bob","emailtest@gmail.com",3,4);

        expect(testEmp.getEmail()).toEqual("emailtest@gmail.com")
    });
    
  });
  describe("GetID", () => {
    it("It should return the ID of the Manager", () => {
        const testEmp = new Manager("bob","emailtest@gmail.com",3,4);

        expect(testEmp.getID()).toEqual(3);
    });
});
    describe("GetRole", () => {
        it("It should return the Role of the Manager", () => {
            const testEmp = new Manager("bob","emailtest@gmail.com",3,4);
            expect(testEmp.getRole()).toEqual("Manager");
        });
    
  });
  describe("GetRoom", () => {
    it("It should return the Role of the Manager", () => {
        const testEmp = new Manager("bob","emailtest@gmail.com",3,3);
        expect(testEmp.getRoom()).toEqual(3);
    });

});
});