const Employee = require ("../lib/Employee");


describe ("Tests to see if Employee class exists", () => {
    it (' should be an object', () => {
     
        const employeeObject = new Employee();
   
        expect(typeof(employeeObject)).toBe('object');
    })


})