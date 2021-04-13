//const { expect, it } = require("@jest/globals");
const Intern = require("../lib/Engineer");

// I start constructing my tests
describe("Tests to see if Intern class exists", () => {
  it(" should be an object", () => {
    // ARRANGE
    // I don't really have something to compare to
    //ACT
    const internObject = new Engineer(
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

});