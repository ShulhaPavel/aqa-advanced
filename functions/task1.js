console.log("function declaration")
function squareRectangle(width, height){
    return width * height;
    // let square = width * height
    // return console.log(square);
}

console.log(squareRectangle(5, 5))

console.log("function expression")
const squareRectangle1 = function (width1, height1){
    return width1 * height1;
    // let square = width * height
    // return console.log(square1)
}

console.log(squareRectangle1(10, 10))

console.log("Arrow function")
const squareRectangle2 = (width2, height2) => {
    return width2 * height2;
    // let square2 = width2 * height2;
    // return console.log(square2)
}

console.log(squareRectangle1(15, 15))