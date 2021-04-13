const Manager = require("./lib/Manager");
// const Engineer = require ("./lib/Engineer");
// const Intern = require ("./lib/Intern");
const inquirer = require("inquirer");
const { throwStatement } = require("@babel/types");
// const path = require ("path");
// const fs = require ("fs");
const render = require("./src/page-template.js");
// const OUTPUT_DIR = path.resolve(__dirname, "dist")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// module.exports = pageContent;

function runApp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the employee??",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      console.log(manager);
    });
  // function buildTeam() {
  //   // Create the output directory if the output path doesn't exist
  //   if (!fs.existsSync(OUTPUT_DIR)) {
  //     fs.mkdirSync(OUTPUT_DIR)
  //   }
  //   fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  // }
}
runApp();
// THIS IS WHERE YOUR MAIN LOGIC WILL LIE

// function appMenu() {

// function createManager () {
//     console.log ("Please build your team");
//     inquirer.prompt( [

//     ])
// }

// }

// You would first require ALL of the files and node packages needed
// Engineer, Manager, Intern,

// REQUIRE that page-template.js
// We are receiving that anonymous function
// Giving the name of pageTemplate
// const pageTemplate = require('./src/page-template.js');
// const { throwStatement } = require("@babel/types");
// // And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
// pageTemplate(answers_from_inquirer_prompt);
// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APPLICATION

// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

// THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF

// THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND

// .then((response) => {
//     console.log(response);

//     const name = response.name;
//     const id = response.id;
//     const email = response.email;

//     buildTeam()
// });

// console.log(response)

// function


// should have an array of employees
// call render(array of employees)
// write the contents to an html file.