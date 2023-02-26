// array of questions for user
questionsArray=[
    {
        type: 'input',
        message: 'What is the title of the project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add short project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Desbribe why and how to use this project:',
        name: 'usage',
      },
    
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUserName',
    },
   
    {
        type: 'input',
        message: 'Add contact email:',
        name: 'email',
    },
    {
        type: 'rawlist',
        message: "Choose a licence: A license tells others what they can and can't do with your code. If you are not sure which licence to choose you can read about the different options here: https://choosealicense.com/",
        name: 'licence',
        choices:['None','Apache Licence 2.0', 'GNU General Public Licence v3.0','MIT Licence','BSD 2-Clause Licence','Eclipse Public Licence 2.0','Mozilla Public Licence v2.0'],
    },
    {   type: 'confirm',
        message: 'Would you like your licence badge displayed next to your project?',
         name: 'badge',
    },
    {   type: 'input',
        message: 'Contribution guidelines',
        name: 'contributing',
    },
    {   type: 'input',
        message: 'Test instructions',
        name: 'tests',
    },  
]
module.exports = questionsArray;