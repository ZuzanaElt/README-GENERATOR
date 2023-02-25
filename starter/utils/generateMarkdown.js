// function to generate markdown for README
function generateMarkdown(answers) {
  
`# ${title}
--------------------------------------------
const READMEcontent =

${title}            Logo licence
DESCRIPTION
${description}

Table of Contents
Installation
Usage
Licence
Contributing
Tests
Questions

Installation
${installation}

Usage
${usage}
License
${licence}

${contributing}

Tests
${tests}
    
Questions
If you have any additional questions not answered here or wish to get in touch regarding developments, you can use the following links:

${githubUserName} : ${githubLink}
${email}


`
return

}

module.exports = generateMarkdown;
