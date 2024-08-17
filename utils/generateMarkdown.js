// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'GPL 3.0':
      return '![GPL 3.0 License](https://img.shields.io/badge/License-GPL_3.0-orange.svg)';
    case 'BSD 3-Clause':
      return '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-lightblue.svg)';
    default:
      return 'MIT';
  } 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://opensource.org/licenses/GPL-3.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return 'MIT';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    
This project is licensed under the ${license}. For more details, see ${renderLicenseLink(license)}.\n`;
  }
  return 'MIT';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contributing)
- [Test Instructions](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contributing}

## Test Instructions
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, please reach out to me via GitHub or email.

GitHub: [${data.github}](https://github.com/${data.github})

Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
