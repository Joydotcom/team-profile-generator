const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

module.exports = pageContent;

function appMenu() {

function createManager () {
    console.log ("Please build your team");
    inquirer.prompt( [
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the employee??",
        },
        {
            type: "input",
            name: "username",
            message: "What is the GitHub username for this Employee?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?",
        },
        {
            type: "input",
            name: "ID",
            message: "What is their employee ID?",
        },
        {
            type: "input",
            name: " ",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
        },
    ])
}

}



function runApp() {
  ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();
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