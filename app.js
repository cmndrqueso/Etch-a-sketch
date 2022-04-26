const DEFAULT_COLOR = '#333333';
const DEFAULT_GRID = 16;

let currentColor = DEFAULT_COLOR;

const container = document.getElementById("grid-container");
let x = DEFAULT_GRID;
let y = DEFAULT_GRID;

// Functions for changing grid size
// const xInput = document.getElementById("x");
// x.addEventListener("xInput",updateX);
// const yInput = document.getElementById("y");
// y.addEventListener("yInput",updateY);
// function updateX(e) {
//     x = e.target.value;
// }
// function updateY(e) {
//     y = e.target.value;
// }

// Will add an mouse click event listener
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function color(){
    e.target.style.backgroundColor = currentColor;
}

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

// function colorSelection(color){
//     // will need to take in color values 
//     // assign color to event of drawing 
// }

function clear(){
    
}

makeRows(x, y);

// const divs = document.getElementsByClassName('grid-item');
// const color = "#002b36";

// colorSelection(color);