const fs = require("fs");
const Employee = require("../classes/Employee");

jest.mock("fs");

describe("Employee", () => {
  describe("Constructor", () => {
    it("should call properly construct a new Employee", () => {
      const testEmp = new Employee(1,2,3);

      expect(testEmp).toBeInstanceOf(Employee)
    });
  });

  describe("GetName", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
        const testEmp = new Employee("bob",2,3);

      expect(testEmp.getName()).toEqual("bob")
    });
  });

  describe("GetEmail", () => {
    it("should call fs.appendFileSync with the passed in 'file' and 'data' arguments", () => {
        const testEmp = new Employee("bob","emailtest@gmail.com",3);

        expect(testEmp.getEmail()).toEqual("emailtest@gmail.com")
    });
    
  });
  describe("GetID", () => {
    it("should call fs.appendFileSync with the passed in 'file' and 'data' arguments", () => {
        const testEmp = new Employee("bob","emailtest@gmail.com",3);

        expect(testEmp.getID()).toEqual(3);
    });
});
    describe("GetRole", () => {
        it("should call fs.appendFileSync with the passed in 'file' and 'data' arguments", () => {
            const testEmp = new Employee("bob","emailtest@gmail.com",3);
    
            expect(testEmp.getRole()).toEqual("Employee");
        });
    
  });
});