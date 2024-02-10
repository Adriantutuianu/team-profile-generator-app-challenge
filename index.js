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
    });
}

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
    });
}
promptIntern();
