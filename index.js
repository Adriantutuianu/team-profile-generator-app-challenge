const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
//function to prompt team manager
function promptManager() {
  console.log("Enter team manager's information:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
}
//function to prompt engineer
function promptEngineer() {
  console.log("Enter engineer's information:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
}
//function to prompt intern
function promptIntern() {
  console.log("Enter intern's information:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Intern's school:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
}

function promptMenu() {
  console.log("\nSelect an option:");
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuOption",
        message: "Choose an option: (use arrows to select)",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menuOption) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        case "Finish building the team":
          generateTeamHTML();
          break;
      }
    });
}

function generateTeamHTML() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  console.log("Team HTML generated successfully:", outputPath);
}

//start by prompting the manager info
promptManager();
