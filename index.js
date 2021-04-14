const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];


function runApp() {
  buildMemberQuestions();
  function buildMemberQuestions() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "build",
          message: "Which type of team member would you like to add?",
          choices: ["Manager", "Engineer", "Intern", "Finish building my team"],
        },
      ])
      .then((data) => {
        if (data.build === "Manager") {
          buildManager();
        }
        if (data.build === "Engineer") {
          buildEngineer();
        }
        if (data.build === "Intern") {
          buildIntern();
        }
        if (data.add === "Finish building my team") {
          buildTeam();
        }
      });
  }

  function buildManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the Manager's name?",
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
          type: "number",
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
        buildMemberQuestions();
      });
  }
  function buildEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's name?",
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
        teamMembers.push(engineer);
        console.log(engineer);
        buildMemberQuestions();
        buildTeam();
      });
  }

  function buildIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the Intern's employee ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "What school does/did the Intern attend?",
        },
      ])

      .then((answers) => {
        console.log(answers);
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internUsername
        );
        teamMembers.push(intern);
        console.log(intern);
        buildMemberQuestions();
        buildTeam();
      });
  }
};
function buildTeam() {

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};

runApp();
