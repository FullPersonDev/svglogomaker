//Importing the Shapes
const {Shape, Triangle, Circle, Square} = require('./shape');

//Create the svg logo generator function

function logoGenerator(answers) {
    const {text, textcolor, shape, shapecolor} = answers;
    let selectedShape;

    if (shape === 'triangle') {
        selectedShape = new Triangle(shapecolor);
    } else if (shape === 'circle') {
        selectedShape = new Circle(shapecolor);
    } else if (shape === 'square') {
        selectedShape = new Square(shapecolor);
    } else {
        throw new Error('Invalid shape');
    }

    const svgTemplate = `
<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'>
    ${selectedShape.generateSVG()}
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${textcolor}' font-size='48'>${text}</text>
</svg>`

    return svgTemplate;
}

//Export the logoGenerator

module.exports = logoGenerator;