const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the project',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Short project description',
      name: 'description',
    },
//     {
//       type: 'input',
//       message: 'Table of contents:',
//       name: 'contentsTable',
//     },
//     {
//         type: 'input',
//         message: 'Usage',
//         name: 'usage',
//       },
//     {
//       type: 'input',
//       message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
//       name: 'installation',
//     },
//     {
//       type: 'input',
//       message: 'What is your Github username',
//       name: 'githubUserName',
//     },
//     {
//         type: 'input',
//         message: 'What is your Github link to your profile',
//         name: 'githubLink',
//       },
//     {
//       type: 'input',
//       message: 'Contact email:',
//       name: 'email',
//     },
//     {
//         type: 'rawlist',
//         message: "Choose a licence: A license tells others what they can and can't do with your code",
//         name: 'licence',
//         choices:['None','Apache Licence 2.0', 'GNU GeneralPublic Licence v3.0','MIT Licence','BSD 2-Clause "Simplified" Licence','BSD 3-Clause "New" or "Revised" Licence','Boost Software Licence 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public Licence 2.0','GNU Affero General Public Licence v3.0','GNU General Public Licence v2.0','GNU Lesser General Public Licence v2.1','Mozilla Public Licence','The Unlicence'],
//     },
//     {type: 'input',
//     message: 'Contributing',
//     name: 'contributing',
//   },
//     {type: 'input',
//     message: 'Tests',
//     name: 'tests',
// },  
  ])
  .then(answers => {
    //deconstructiong answers
    const {title, description,contents,installation, usage,githubUserName,githubLink, email,licence,contributing, tests} = answers;
    
    const infoHTML =
    `
    <!DOCTYPE html>
    <html lang="en-gb">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">  
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">


    <link href="./style/css"  rel="stylesheet" type="text/css">

      <title>README-file generator</title>
    </head>
    
    <body class=container-fluid>
    <div class="jumbotron jumbotron-fluid container" >
            <h1 class="project-title display-4">${title}</h1>
            <p class=logo>licence logo<p>
            <hr>
        </div>
        <div>
            <h2>DESCRIPTION</h2>
            <p class="description">${description}</p>
        </div>
        <div>
            <h2 id="table-of-contents">Table of Contents</h2>
            <ul class="contents-table">
                <li><a href="#install">Installation</a></li>
                <li><a href="#usage">Usage</a></li>
                <li><a href="#licence">Licence</a></li>
                <li><a href="#contributing">Contributing</a></li>
                <li><a href="#tests">Tests</a></li>
                <li><a href="#questions">Questions</a></li>
            </ul>
        </div>
        <div>
            <h2 id="install">Installation</h2>
            <p class="#">${installation}</p>
        </div>
        <div>
            <h2 id="usage">Usage</h2>
            <p class="#">${usage}</p>
        </div>
        
        <div>
            <h2 id="licence">License</h2>
            <p class="#">${licence}</p>
        </div>
        <div>
            <h2 id="contributing">Contributing</h2>
            <p class="#">${contributing}</p>
        </div>
        <div>
            <h2 id="tests">Tests</h2>
            <p class="#">${tests}</p>
        </div>
        <div>
            <h2 id="questions">Questions</h2>
            <p class="#">If you have any additional questions not answered here or wish to get in touch regarding developments, you can use the following links:</p>

            <p id="githubLink">${githubUserName} : ${githubLink}</p>
            <p id="email">${email}</p>
        </div>
        
    </body>
    
    </html>
    `;
    
    //creates html file
    fs.writeFile(`index.html`, infoHTML , (error) => { // or JSON.stringify(answers)
      return error
        ? console.error(error)
        : console.log('Write File Operation Success!');
    })
       
})

// function to initialize program
function init() {

}

// function call to initialize program
init();
