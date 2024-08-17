// TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'My Awesome Project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
        default: 'A brief description of what the project does and its purpose.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: '1. Clone the repo\n2. Run npm install',
    },
    {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
        default: 'This project allow to generate readme file quick.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
        default: 'Please refer to the CONTRIBUTING.md file for guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
        default: 'Run `npm test` to execute the test suite.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
        default: '',
    },
    {
        type: "input",
        message: "What is your GitHub handle?",
        name: "github",
        default: 'MyGithubName',
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        default: 'myemail@email.com',
    },
];

// Function to generate license badge
function getLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL 3.0':
            return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-orange)](https://opensource.org/licenses/GPL-3.0)';
        case 'BSD 3-Clause':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-lightblue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        default:
            return '';
    }
}


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    let readmeText = "";

    // Users README title
    readmeText += `# ${data.title}\n\n`;

    // Licensing badge
    readmeText += `${getLicenseBadge(data.license)}\n\n`;

    // Table of contents
    readmeText += `## Table of Contents\n\n`;
    readmeText += `* [Description](#description)\n`;
    readmeText += `* [Installation](#installation)\n`;
    readmeText += `* [Usage Information](#usage-information)\n`;
    readmeText += `* [Contribution Guidelines](#contribution-guidelines)\n`;
    readmeText += `* [Test Instructions](#test-instructions)\n`;
    readmeText += `* [License](#license)\n`;
    readmeText += `* [Questions](#questions)\n\n`;

    // Description section
    readmeText += `## Description\n\n${data.description}\n\n`;

    // Installation section
    readmeText += `## Installation\n\n${data.installation}\n\n`;

    // Usage information section
    readmeText += `## Usage Information\n\n${data.usage}\n\n`;

    // Contribution guidelines section
    readmeText += `## Contribution Guidelines\n\n${data.contributing}\n\n`;

    // Test instructions section
    readmeText += `## Test Instructions\n\n${data.tests}\n\n`;

    // License section
    readmeText += `## License\n\nThis application is covered under the ${data.license} license.\n\n`;

    // Questions section
    readmeText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
    readmeText += `[Link to GitHub](https://github.com/${data.github})\n\n`;
    readmeText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;

    // Write the file
    fs.writeFile(fileName, readmeText, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Success! generated-README.md has been generated.");
        }
    });
}


// TODO: Create a function to initialize app


function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("generated-README.md", data);
        });
}

// Function call to initialize app
init();