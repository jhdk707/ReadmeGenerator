// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache'];

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'Enter the Project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the information on how to use this Markdown Generator'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license',
        choices: licenses
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
