const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");




function appMenu() {

function createManager () {
    console.log ("Please build your team");
    inquirer.prompt( [
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
        }
    ])
}

}
// THIS IS WHERE YOUR MAIN LOGIC WILL LIE

// You would first require ALL of the files and node packages needed
// Engineer, Manager, Intern, 

// REQUIRE that page-template.js
// We are receiving that anonymous function
// Giving the name of pageTemplate
const pageTemplate = require('./src/page-template.js');
// And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(answers_from_inquirer_prompt);
// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APPLICATION

// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

// THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF

// THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND