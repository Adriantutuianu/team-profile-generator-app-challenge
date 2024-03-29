// creates the team
const generateTeam = (team) => {
  // creates the manager html
  const generateManager = (manager) => {
    return `
          <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card employee-card">
                  <div class="card-header card-header-manager">
                      <h2 class="card-title card-name">${manager.getName()}</h2>
                      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                  </div>
                  <div class="card-body">
                      <ul class="list-group">
                          <li class="list-group-item">ID: ${manager.getId()}</li>
                          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                      </ul>
                  </div>
              </div>
          </div>
      `;
  };

  // creates the html for engineers
  const generateEngineer = (engineer) => {
    return `
          <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card employee-card">
                  <div class="card-header card-eng">
                      <h2 class="card-title card-name">${engineer.getName()}</h2>
                      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                  </div>
                  <div class="card-body">
                      <ul class="list-group">
                          <li class="list-group-item">ID: ${engineer.getId()}</li>
                          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      `;
  };

  // creates the html for interns
  const generateIntern = (intern) => {
    return `
          <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card employee-card">
                  <div class="card-header card-int">
                      <h2 class="card-title card-name">${intern.getName()}</h2>
                      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                  </div>
                  <div class="card-body">
                      <ul class="list-group">
                          <li class="list-group-item">ID: ${intern.getId()}</li>
                          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                          <li class="list-group-item">School: ${intern.getSchool()}</li>
                      </ul>
                  </div>
              </div>
          </div>
      `;
  };

  // Find manager
  const managers = team.filter((employee) => employee.getRole() === "Manager");
  let managerHtml = "";
  if (managers.length > 0) {
    managerHtml = generateManager(managers[0]);
  }

  // Find engineers
  const engineers = team.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  const engineerHtml = engineers
    .map((engineer) => generateEngineer(engineer))
    .join("");

  // Find interns
  const interns = team.filter((employee) => employee.getRole() === "Intern");
  const internHtml = interns.map((intern) => generateIntern(intern)).join("");

  // Return the combined HTML
  return `
      <div class="row justify-content-center">
         ${managerHtml}
      </div>
      <div class="row">
          ${engineerHtml}
          ${internHtml}
      </div>
    `;
};

// exports function to generate entire page
module.exports = (team) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="../css/style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              ${generateTeam(team)}
          </div>
          <footer>
      <p class="footer-name">@ Adrian Tut 2024</p>
          </footer>
      </body>
      </html>
    `;
};
