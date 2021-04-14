const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const { throwStatement, assertEnumDefaultedMember, tSIntrinsicKeyword } = require("@babel/types");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
// const { nextTick } = require("process");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
// module.exports = pageContent;

function runApp() {
  function addMemberQuestions() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "add",
          message: "Which type of team member would you like to add?",
          choices: ["Manager", "Engineer", "Intern", "Finish building my team"],
        },
      ])
      .then((data) => {
        if (data.add === "Manager") {
          managerQuestions();
        }
        if (data.add === "Engineer") {
          engineerQuestions();
        }
        if (data.add === "Intern") {
          internQuestions();
        }
        if (data.add === "Finish building my team") {
          buildTeam();
        }
      });
  }

  function managerQuestions() {
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
          name: "managerOfficeNumber",
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
        teamMembers.push(manager);
        console.log(manager);
        buildTeam();
        addMemberQuestion();
      });
  }
  function engineerQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of the engineer?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is their employee ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "gitHubUsername",
          message: "What is the Engineer's GitHub username?",
        },
      ])

      .then((answers) => {
        console.log(answers);
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.gitHubUsername
        );
        teamMembers.push(Engineer);
        console.log(engineer);
        addMemberQuestion();
        buildTeam();
      });
  }
};
function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};

runApp();
