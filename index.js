const fs = require('fs');
const inquirer = require("inquirer");
const jest = require("jest");


inquirer
  .prompt ([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices: ['Circle', 'Square', 'Triangle']
    },
    {
      type: 'input',
      name: 'initials',
      message: 'Give some letters to add to the logo (up to 3)'
    },
    {
      type: 'input',
      name: 'background-color',
      message: 'What color do you want the shape to be?'
    },
    {
      type: 'input',
      name: 'text-color',
      message: 'What color do you want your text to be?'
    }
  ])
  .then ((response) => {
    console.log(response)
  })