let { Shape, Square, Triangle, Circle } = require("./shapes")

// Shape Class Tests
describe('Shape', () => {
  // A test is created to check that shapes has the properties "name", "bgColor", and "txtColor"
  it('Should take in properties text, background-color, and color', () => {
    const testStr = 'HAP, blue, white';
    const shape = new Shape('HAP', 'blue', 'white');
    const shapeStr = `${shape.text}, ${shape.bgColor}, ${shape.txtColor}`;
    expect(shapeStr).toEqual(testStr);
  });
  // Tests to see if Errors are thrown with Invalid Colors and Invalid Lengths
  it('Should throw an error if the text string is less than 3 characters.', () => {
    expect(() => new Shape('asdf', 'blue', 'white')).toThrowError('Text can be 3 characters long max.')
  });
  it('Should throw an error if the bgColor or the txtColor are not valid css colors.', () => {
    expect(() => new Shape('hap', 'blour', 'red')).toThrowError('blour is not a valid color.')
  })
})

// Circle Class
describe('Circle', () => {
  // renderSVGObj() Method Check
  it('Should run method renderSVGObj() and Return Text', () => {
    const circle = new Circle('HAP', 'blue', 'white');
    expect(circle.renderSVGObj()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50%" cy="50%" r="80"  stroke-width="3" fill="blue" />
      <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="white">HAP</text>
      Sorry, your browser does not support inline SVG.
    </svg>`);
  })
  // renderHTMLObj() Method Check
  it('Should run method renderHTMLObj() and Return Text', () => {
    const circle = new Circle('HAP', 'blue', 'white');
    expect(circle.renderHTMLObj()).toEqual(`
    <!DOCTYPE html>
    <html>
      <body>
        <svg height="200" width="300">
          <circle cx="50%" cy="50%" r="80"  stroke-width="3" fill="blue" />
          <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="white">HAP</text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </body>
    </html>`);
  })
})

// Square Class
describe('Square', () => {
  // renderSVGObj() Method Check
  it('Should run method renderSVGObj() and Return Text', () => {
    const square = new Square('HAP', 'blue', 'white');
    expect(square.renderSVGObj()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="75,25 75,175 225,175 225,25" fill="blue" />
      <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="white">HAP</text>
      Sorry, your browser does not support inline SVG.
    </svg>`);
  })
  // renderHTMLObj() Method Check
  it('Should run method renderHTMLObj() and Return Text', () => {
    const square = new Square('HAP', 'blue', 'white');
    expect(square.renderHTMLObj()).toEqual(`
    <!DOCTYPE html>
    <html>
      <body>
        <svg height="200" width="300">
          <polygon points="75,25 75,175 225,175 225,25" fill="blue" />
          <text x="50%" y="55%" text-anchor="middle" font-size="40" fill="white">HAP</text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </body>
    </html>`);
  })
})

// Triangle Class
describe('Triangle', () => {
  // renderSVGObj() Method Check
  it('Should run method renderSVGObj() and Return Text', () => {
    const triangle = new Triangle('HAP', 'blue', 'white');
    expect(triangle.renderSVGObj()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 50,190 250,190" style="fill:blue" />
      <text x="50%" y="65%" text-anchor="middle" font-size="40" fill="white">HAP</text>
      Sorry, your browser does not support inline SVG.
    </svg>`);
  })
  // renderHTMLObj() Method Check
  it('Should run method renderHTMLObj() and Return Text', () => {
    const triangle = new Triangle('HAP', 'blue', 'white');
    expect(triangle.renderHTMLObj()).toEqual(`
    <!DOCTYPE html>
    <html>
      <body>
        <svg height="200" width="300">
          <polygon points="150,10 50,190 250,190" style="fill:blue" />
          <text x="50%" y="65%" text-anchor="middle" font-size="40" fill="white">HAP</text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </body>
    </html>`);
  })
})