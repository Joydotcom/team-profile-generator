
const Intern = require("../lib/Intern");

describe("Tests to see if Intern class exists", () => {
  it(" should be an object", () => {
  
    const internObject = new Intern(
      "name",
      "id",
      "email",
      "school"
    );
 
    expect(typeof internObject).toBe("object");

    expect(internObject.getRole()).toBe("Intern");

    expect(internObject.getSchool()).toBe("school");
  });

});