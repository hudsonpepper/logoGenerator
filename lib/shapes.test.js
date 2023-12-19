let Shapes  = require("./shapes")


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
describe('Shapes', () => {
  // A test is created to check that shapes has the properties "name", "bgColor", and "txtColor"
  it('Shape should take in properties text, background-color, and color') {
    const testStr = 'HAP, blue, white';
    const shape = newArithmetic('HAP', 'blue', 'white');
    const shapeStr = `${shape.text}, ${shape.bgColor}, ${shape.txtColor}`;
    expect(shapeStr.toEqual(testStr));
  }
})