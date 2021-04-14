
const Engineer = require("../lib/Engineer");

describe("Tests to see if Engineer class exists", () => {
  it(" should be an object", () => {

    const engineerObject = new Engineer(
      "name",
      "id",
      "email",
      "gitHubUsername"
    );
  
    expect(typeof engineerObject).toBe("object");

    expect(engineerObject.getRole()).toBe("Engineer");

    expect(engineerObject.getGitHubUsername()).toBe("gitHubUsername");
  });

});
