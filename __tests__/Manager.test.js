
const Manager = require("../lib/Manager");

describe("Tests to see if Manager class exists", () => {
  it(" should be an object", () => {

    const managerObject = new Manager(
      "name",
      "id",
      "email",
      "officeNumber"
    );
  
    expect(typeof managerObject).toBe("object");

    expect(managerObject.getRole()).toBe("Manager");

    expect(managerObject.getOfficeNumber()).toBe("officeNumber");
  });

});