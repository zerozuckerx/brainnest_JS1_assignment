//diagonal(hypotenuse) of a square
function hypotenuse(sideLength) {
    let diagonal = Math.sqrt(2) * sideLength;
    return "The hypotenuse is: " + diagonal;
}

//area of a square with 3 sides
function area(a,b,c) {
    let s = (a + b + c)/2; //semi perimeter
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return "The surface area is: " + area;
}

//circumference and surface area of a circle
function circle(radius) {
    circumference = 2 * radius * Math.PI;
    surfaceArea = Math.pow(radius,2) * Math.PI;
    return [circumference, surfaceArea];
}
