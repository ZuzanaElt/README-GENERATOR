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
             const readmeTemplate = generateMarkdown(answers);
      
            // function to write README file
            fs.writeFile('../README.md', readmeTemplate , (error) => { 
                return error
                ? console.error(error)
                : console.log('Write File Operation Success!');
            })
        }) 
};

// function call to initialize program
init();
