//const { expect, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

// I start constructing my tests
describe("Tests to see if Engineer class exists", () => {
  it(" should be an object", () => {
    // ARRANGE
    // I don't really have something to compare to
    //ACT
    const engineerObject = new Engineer(
      "name",
      "id",
      "email",
      "gitHubUsername"
    );
    //ASSERT
    expect(typeof engineerObject).toBe("object");

    expect(engineerObject.getRole()).toBe("Engineer");

    expect(engineerObject.getGitHubUsername()).toBe("gitHubUsername");
  });

  //Clarifying the ARRANGE part

  // it('should take in a name',() => {
  //     //ARRANGE
  //     const name = "Juliana"
  //     //ACT
  //     const employeeObject = new Employee("Juliana");
  //     //ASSERT
  //     expect(employeeObject.name) .toBe(name);
  // })
});
