let {Shape, Square, Triangle, Circle}  = require("./shapes")


// // A testing suite for Arithmetic is created.
// describe('Arithmetic', () => {
//   // A test is created to check that sum does in fact return the two numbers added together.
//   describe('sum', () => {
//     it('should take two numbers and add them together', () => {
//       const total = 4;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.sum(2, 2)).toEqual(total);
//     });
//   });
// });

// A testing suite for Shapes is created.
describe('Shape', () => {
  // A test is created to check that shapes has the properties "name", "bgColor", and "txtColor"
  it('Should take in properties text, background-color, and color', () => {
    const testStr = 'HAP, blue, white';
    const shape = new Shape('HAP', 'blue', 'white');
    const shapeStr = `${shape.text}, ${shape.bgColor}, ${shape.txtColor}`;
    expect(shapeStr).toEqual(testStr);
  });
  
  it('Should throw an error if the text string is less than 3 characters.', () => {
    expect(()=> new Shape('asdf', 'blue', 'white')).toThrowError('Text can be 3 characters long max.')
  });
  it('Should throw an error if the bgColor or the txtColor are not valid css colors.', () => {
    expect(()=> new Shape('hap', 'blour', 'red')).toThrowError('blour is not a valid color.')
  })
})
//describe('')