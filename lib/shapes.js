let validateColor = require("validate-color").default;

class Shape {
  constructor(text, bgColor, txtColor) {
    if (text.length > 3) {
      console.error('Text can be 3 characters long max.')
      throw new Error('Text can be 3 characters long max.')
    }

    if (!validateColor(bgColor)) {
      console.error(`${bgColor} is not a valid color.`)

      throw new Error(`${bgColor} is not a valid color.`);
    }
    if (!validateColor(txtColor)) {
      console.error(`${txtColor} is not a valid color.`)
      throw new Error(`${txtColor} is not a valid color.`);
    }

    this.text = text;
    this.bgColor = bgColor;
    this.txtColor = txtColor;
  }
}

class Circle extends Shape {
  constructor(text, bgColor, txtColor) {
    super(text, bgColor, txtColor);

  }
  renderObj() {
    return `<!DOCTYPE html>
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

class Square extends Shape {
  constructor(text, bgColor, txtColor) {
    super(text, bgColor, txtColor);

  }
  renderObj() {
    return `<!DOCTYPE html>
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

class Triangle extends Shape {
  constructor(text, bgColor, txtColor) {
    super(text, bgColor, txtColor);

  }
  renderObj() {
    return `<!DOCTYPE html>
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