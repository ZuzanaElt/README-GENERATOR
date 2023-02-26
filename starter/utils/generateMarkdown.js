// function to generate markdown for README
function generateMarkdown(answers) {
  return`     
# ${answers.title.toUpperCase()}   

${answers.badge}
-----   
        
## DESCRIPTION
${answers.description}

## Table of Contents

 * [Installation](#depencencies)
 * [Usage](#usage)
 * [Contribution guidelines](#contributing)
 * [Test instructions](#tests)
 * [Questions](#questions)
 * [Licence](#licence)


-----

## Installation
  ${answers.installation}


## Usage
  ${answers.usage}


## Contribution guidelines
  ${answers.contributing}


## Test instructions
  ${answers.tests}

            
## Questions
If you have any additional questions not answered here or wish to get in touch regarding developments, you can use the following links:
Github link: [github.com/${answers.githubUserName}](https://https://github.com/${answers.githubUserName})
Contact email: ${answers.email} 


## License
This application is covered under ${answers.licence} licence. 
To learn more about licences including this one visit https://choosealicense.com/

## Screenshots
`; 

}

module.exports = generateMarkdown;
