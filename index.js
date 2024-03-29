//Install required packages:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//Import the logoGenerator file:
const logoGenerator = require('./lib/logoGenerator');

//Write down questions for the prompt:
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want inside the logo?'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What color for your text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color for your shape background?'
    }
];

inquirer.prompt(questions).then(answers => {
    writeToFile('logo.svg', logoGenerator(answers));
});

function writeToFile(fileName, data){
    const filepath = path.join('examples', fileName);
    fs.writeFile(filepath, data, (err) =>{
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}