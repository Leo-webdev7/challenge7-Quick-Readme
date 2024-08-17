// TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'My Awesome Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
        default: 'A brief description of what the project does and its purpose.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: '1. Clone the repo\n2. Run npm install'
    },
    {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
        default: 'Please refer to the CONTRIBUTING.md file for guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
        default: 'Run `npm test` to execute the test suite.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
        default: ''
    },
    {
        type: "input",
        message: "What is your GitHub handle?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];



// TODO: Create a function to write README file



// TODO: Create a function to initialize app


function init() {
    
}

// Function call to initialize app
init();