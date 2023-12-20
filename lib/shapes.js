// npm package to check if color is a valid color
let validateColor = require("validate-color").default;

// Shape Class: 
class Shape {
  constructor(text, bgColor, txtColor) {
    // Tertiary Catch Validating Input: Should never run (hopefully)
    // -- Length Checks --
    if (text.length > 3) {
      console.error('Text can be 3 characters long max.')
      throw new Error('Text can be 3 characters long max.')
    }
    // -- Color Checks --
    if (!validateColor(bgColor)) {
      console.error(`${bgColor} is not a valid color.`)
      throw new Error(`${bgColor} is not a valid color.`);
    }
    if (!validateColor(txtColor)) {
      console.error(`${txtColor} is not a valid color.`)
      throw new Error(`${txtColor} is not a valid color.`);
    }
    // Initializes Properties
    this.text = text;
    this.bgColor = bgColor;
    this.txtColor = txtColor;
  }
}


// Circle Class: Subclass of Shape
class Circle extends Shape {
  // Constructor: Inherits Shape Properties
  constructor(text, bgColor, txtColor) {
    super(text, bgColor, txtColor);
  }

  // Begin Methods: 
  // -- Method: Returns SVG File Text --
  renderSVGObj() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50%" cy="50%" r="80"  stroke-width="3" fill="${this.bgColor}" />
      <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="${this.txtColor}">${this.text}</text>
      Sorry, your browser does not support inline SVG.
    </svg>`
  }
  // -- Method: Returns HTML File Text --
  renderHTMLObj() {
    return `
    <!DOCTYPE html>
    <html>
      <body>
        <svg height="200" width="300">
          <circle cx="50%" cy="50%" r="80"  stroke-width="3" fill="${this.bgColor}" />
          <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="${this.txtColor}">${this.text}</text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </body>
    </html>`
  }
}

// Square Class: Subclass of Shape
class Square extends Shape {
  // Constructor: Inherits Shape Properties
  constructor(text, bgColor, txtColor) {
    super(text, bgColor, txtColor);
  }

  // Begin Methods: 
  // -- Method: Returns SVG File Text --
  renderSVGObj() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="75,25 75,175 225,175 225,25" fill="${this.bgColor}" />
      <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="${this.txtColor}">${this.text}</text>
      Sorry, your browser does not support inline SVG.
    </svg>`
  }
    // -- Method: Returns HTML File Text --

  renderHTMLObj() {
    return `
    <!DOCTYPE html>
    <html>
      <body>
        <svg height="200" width="300">
          <polygon points="75,25 75,175 225,175 225,25" fill="${this.bgColor}" />
          <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="${this.txtColor}">${this.text}</text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </body>
    </html>`
  }
}

// Triangle Class: Subclass of Shape
class Triangle extends Shape {
  // Constructor: Inherits Shape Properties
  constructor(text, bgColor, txtColor) {
    super(text, bgColor, txtColor);
  }

  // Begin Methods: 
  // -- Method: Returns SVG File Text --
  renderSVGObj() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 50,190 250,190" style="fill:${this.bgColor}" />
      <text x="50%" y="65%" text-anchor="middle" font-size="40" fill="${this.txtColor}">${this.text}</text>
      Sorry, your browser does not support inline SVG.
    </svg>`
  }
    // -- Method: Returns HTML File Text --

  renderHTMLObj() {
    return `
    <!DOCTYPE html>
    <html>
      <body>
        <svg height="200" width="300">
          <polygon points="150,10 50,190 250,190" style="fill:${this.bgColor}" />
          <text x="50%" y="65%" text-anchor="middle" font-size="40" fill="${this.txtColor}">${this.text}</text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </body>
    </html>`
  }
}


module.exports = { Shape, Square, Triangle, Circle };