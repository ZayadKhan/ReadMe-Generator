const inquirer = require("inquirer")
const fs = require("fs");

inquirer.prompt([
    {
        type:'input',
        message:'what is the name of your project?',
        name: 'project'
    },
    {
        type:'input',
        message:'enter project description',
        name: 'description'
    },
    {
        type:'input',
        message:'Enter installation instructions',
        name: 'installation'
    },
    {
        type:'input',
        message:'Describe the usage of the project',
        name: 'usage'
    },
    {
        type:'input',
        message:'Which license do you want to use for this project?',
        choices:["IBM","MIT"],
        name: 'license'
    },
    {
        type:'input',
        message:'Provide contributors, if any',
        name: 'contributors'
    },
    {
        type:'input',
        message:'What is your GitHub username?',
        name: 'username'
    },
    {
        type:'input',
        message:'What is your email?',
        name: 'email'
    },
    
]).then(response=> {
    console.log(response);

    fs.writeFile(
        "README-GEN.md",
        `# ${response.project} \n` + 
        `## Table of Contents \n * Description \n * Installation \n * Usage \n * Testing \n * License \n * Contributors \n * Questions \n` +
        `## Description \n ${response.description} \n` +
        `## Installation Instructions \n ${response.installation} \n` +
        `## Usage \n ${response.usage} \n` +
        `## Testing Instructions \n ${response.test} \n` +
        `## License \n ${response.license} \n` +
        `## Contributors \n ${response.contributors} \n` +
        `## Questions \n * GitHub username: ${response.username} \n * GitHub email: ${ response.email } \n`,
        (err) =>
        err ? console.error(err) : console.log("ReadMe created")
    );
})