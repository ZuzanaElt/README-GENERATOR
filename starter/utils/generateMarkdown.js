// function to generate markdown for README
function generateMarkdown(answers) {
  return `
 
         
# ${answers.title.toUpperCase()}   LicenceLogo

---
       
        
## DESCRIPTION
${answers.description}

>## Table of Contents

> * [Installation](#depencencies)
> * [Usage](#usage)
> * [Licence](#licence)
> * [Contributing](#contributing)
> * [Tests](#tests)
> * [Questions](#questions)


## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

## License
  ${answers.licence}

## Contributing
  ${answers.contributing}

## Tests
  ${answers.tests}
            
## Questions
    If you have any additional questions not answered here or wish to get in touch regarding developments, you can use the following links:

Github link: <github.com/  ${answers.githubUserName} >
Contact email: <${answers.email} >
`;
    
}

module.exports = generateMarkdown;
