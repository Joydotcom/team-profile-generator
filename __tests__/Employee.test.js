// We set up our tests by importing in the files were testing for 
const { expect, it } = require("@jest/globals");
const Employee = require ("../lib/Employee");

// I start constructing my tests
describe ("Tests to see if Employee class exists", () => {
    it (' should be an object', () => {
        // arrange
        // I don't really have something to compare to
        //ACT
        const employeeObject = new Employee();
        //ASSERT
        expect(typeof(employeeObject)).toBe('object');
    })

    //Clarifying the ARRANGE part

    it('should take in a name',() => {
        //ARRANGE
        const name = "Juliana"
        //ACT
        const employeeObject = new Employee("Juliana");
        //ASSERT
        expect(employeeObject.name) .toBe(name);
    })
})