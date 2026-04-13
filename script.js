const rectangle = editor.createRectangle();
// Define rectangle dimensions.
rectangle.width = 240;
rectangle.height = 180;
// Define rectangle position.
rectangle.translation = { x: 10, y: 10 };
// Define rectangle color.
const color = { red: 0.32, green: 0.34, blue: 0.89, alpha: 1 };
// Fill the rectangle with the color.
const rectangleFill = editor.makeColorFill(color);
rectangle.fill = rectangleFill;
// Add the rectangle to the document.
const insertionParent = editor.context.insertionParent;
insertionParent.children.append(rectangle);
