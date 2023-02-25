// array of questions for user
questionsArray=[
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
     {
      type: 'input',
      message: 'Table of contents:',
      name: 'contentsTable',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
      },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your Github username',
      name: 'githubUserName',
    },
    {
        type: 'input',
        message: 'What is your Github link to your profile',
        name: 'githubLink',
      },
    {
      type: 'input',
      message: 'Contact email:',
      name: 'email',
    },
    {
        type: 'rawlist',
        message: "Choose a licence: A license tells others what they can and can't do with your code",
        name: 'licence',
        choices:['None','Apache Licence 2.0', 'GNU GeneralPublic Licence v3.0','MIT Licence','BSD 2-Clause "Simplified" Licence','BSD 3-Clause "New" or "Revised" Licence','Boost Software Licence 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public Licence 2.0','GNU Affero General Public Licence v3.0','GNU General Public Licence v2.0','GNU Lesser General Public Licence v2.1','Mozilla Public Licence','The Unlicence'],
    },
    {type: 'input',
    message: 'Contributing',
    name: 'contributing',
  },
    {type: 'input',
    message: 'Tests',
    name: 'tests',
    },  
]
module.exports = questionsArray;