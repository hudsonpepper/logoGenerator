const fs = require('fs');
const inquirer = require("inquirer");
let { Shape, Square, Triangle, Circle } = require("./lib/shapes")
let validateColor = require("validate-color").default;


async function questionaire() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want?',
        choices: ['Circle', 'Square', 'Triangle']
      },
      {
        type: 'input',
        name: 'initials',
        message: 'Give some letters to add to the logo (up to 3)',
        validate(input) {
          if (input.length > 3) {
            console.error(`\nError: ${input} is too long. Max length is 3 characters.`)
          }
          return input.length <= 3;
        }
      },
      {
        type: 'input',
        name: 'backgroundColor',
        message: 'What color do you want the shape to be?',
        validate(input) {
          if (!validateColor(input)) {
            console.error(`\nError: ${input} is not a valid color.`)
          }
          return validateColor(input);
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your text to be?',
        validate(input) {
          if (!validateColor(input)) {
            console.error(`\nError: ${input} is not a valid color.`)
          }
          return validateColor(input);
        }
      }
    ])
    .then((response) => {
      let shape;
      if (!validateColor(response.backgroundColor)) {
        throw new Error(`${response.backgroundColor} is not a valid color.`);
      }
      if (!validateColor(response.textColor)) {
        throw new Error(`${response.textColor} is not a valid color.`);
      }

      switch (response.shape) {
        case 'Circle':
          shape = new Circle(response.initials, response.backgroundColor, response.textColor);
          fs.writeFileSync("./output/logo.html", String(shape.renderObj()));
          break;
        case 'Square':
          shape = new Square(response.initials, response.backgroundColor, response.textColor);
          fs.writeFileSync("./output/logo.html", String(shape.renderObj()));
          break;
        case 'Triangle':
          shape = new Triangle(response.initials, response.backgroundColor, response.textColor);
          fs.writeFileSync("./output/logo.html", String(shape.renderObj()));
          break;

      }
      return response;

    })
}
let respObj = questionaire();

