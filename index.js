// File System Package
const fs = require('fs');
// Inquirer Package
const inquirer = require("inquirer");
// Validate-Color Package: Checks if a color is a valid color type
const validateColor = require("validate-color").default;

// Importing the Relevant Classes
let { Shape, Square, Triangle, Circle } = require("./lib/shapes")

inquirer
  // Start of Questionaire
  .prompt([
    // Type of Shape
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices: ['Circle', 'Square', 'Triangle']
    },
    // Initials in Logo
    {
      type: 'input',
      name: 'initials',
      message: 'Give some letters to add to the logo (up to 3)',
      // Validation Condition: Checks if length is > 3 Char
      validate(input) {
        if (input.length > 3) {
          console.error(`\nError: ${input} is too long. Max length is 3 characters.`)
        }
        return input.length <= 3;
      }
    },
    // Background Color
    {
      type: 'input',
      name: 'backgroundColor',
      message: 'What color do you want the shape to be?',
      // Validation Condtion: Checks if color is valid
      validate(input) {
        if (!validateColor(input)) {
          console.error(`\nError: ${input} is not a valid color.`)
        }
        return validateColor(input);
      }
    },
    // Text Color
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want your text to be?',
      // Validation Condtion: Checks if color is valid
      validate(input) {
        if (!validateColor(input)) {
          console.error(`\nError: ${input} is not a valid color.`)
        }
        return validateColor(input);
      }
    }
  ])
  // End of Questionaire
  // Start of Response Handling
  .then((response) => {
    let shape;
    // Secondary Response Catch: Validates Input. Should Never Run If Above Code Works Properly
    if (!validateColor(response.backgroundColor)) {
      throw new Error(`${response.backgroundColor} is not a valid color.`);
    }
    if (!validateColor(response.textColor)) {
      throw new Error(`${response.textColor} is not a valid color.`);
    }
    // Switch to Generate Appropriate Object
    switch (response.shape) {
      // Circle
      case 'Circle':
        shape = new Circle(response.initials, response.backgroundColor, response.textColor);
        // Generates Output Files: SVG and HTML
        fs.writeFileSync("./output/logo.html", String(shape.renderHTMLObj()));
        fs.writeFileSync("./output/logo.svg", String(shape.renderSVGObj()));
        console.log("Success! Check Output Folder for Results")
        break;
      // Square
      case 'Square':
        shape = new Square(response.initials, response.backgroundColor, response.textColor);
        // Generates Output Files: SVG and HTML
        fs.writeFileSync("./output/logo.html", String(shape.renderHTMLObj()));
        fs.writeFileSync("./output/logo.svg", String(shape.renderSVGObj()));
        console.log("Success! Check Output Folder for Results")
        break;
      // Triangle
      case 'Triangle':
        shape = new Triangle(response.initials, response.backgroundColor, response.textColor);
        // Generates Output Files: SVG and HTML
        fs.writeFileSync("./output/logo.html", String(shape.renderHTMLObj()));
        fs.writeFileSync("./output/logo.svg", String(shape.renderSVGObj()));
        console.log("Success! Check Output Folder for Results")
        break;
      // Error for Invalid Shape
      default:
        console.error("Error: Invalid Shape")
    }
  })