const radiusInput = document.getElementById('radius');
const circleAreaInput = document.getElementById('circle-area');

function getCircleArea() {
    const radius = parseFloat(radiusInput.value.trim());
    const area = Math.PI * radius * radius;
    circleAreaInput.value = area.toFixed(2);
}

const lengthTriangleInput = document.getElementById('length_triangle');
const breadthTriangleInput = document.getElementById('breadth_triangle');
const triangleAreaInput = document.getElementById('triangle-area');

function getTriangleArea() {
    const length = parseFloat(lengthTriangleInput.value.trim());
    const breadth = parseFloat(breadthTriangleInput.value.trim());
    const area = 0.5 * length * breadth;
    triangleAreaInput.value = area.toFixed(2);
}

const sideInput = document.getElementById('side');
const squareAreaInput = document.getElementById('square-area');

function getSquareArea() {
    const side = parseFloat(sideInput.value.trim());
    const area = side * side;
    squareAreaInput.value = area.toFixed(2);
}

const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const rectangleAreaInput = document.getElementById('rectangle-area');

function getRectangleArea() {
    const length = parseFloat(lengthInput.value.trim());
    const width = parseFloat(widthInput.value.trim());
    const area = length * width;
    rectangleAreaInput.value = area.toFixed(2);
}