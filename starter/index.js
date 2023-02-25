const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questionsArray = require("./questionsFile");


// function to initialize program
function init() {
    inquirer
        .prompt(questionsArray)
        .then(answers => {
            let chosenLicence = '';
            switch(answers.licence){
                case 'None':
                chosenLicence='';
                break;
                case 'Apache Licence 2.0':
                chosenLicence='![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
                break;
                case 'GNU General Public Licence v3.0': chosenLicence='![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
                break;
                case 'MIT Licence': chosenLicence='![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
                break;
                case 'BSD 2-Clause Licence': chosenLicence='![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
                break;
                case 'Mozilla Public Licence v2.0': chosenLicence='![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
                break;
                case 'Eclipse Public Licence 2.0': chosenLicence='![License: EPL 2.0](https://img.shields.io/badge/licence-EPL%202.0-blue)';
                break;
                default: console.log("If you do not like any of these licences you can search for more here https://choosealicense.com/");
            return chosenLicence
            };
        
            //allocating badge depending on selection
             if( answers.badge ){
                answers.badge=chosenLicence
            };
             const readmeTemplate = generateMarkdown(answers);
            // function to write README file
            fs.writeFile('../README.md', readmeTemplate , (error) => { 
                return error
                ? console.error(error)
                : console.log('Your README file is now generated');
            });
        }); 
};

// function call to initialize program
init();

