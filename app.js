const DEFAULT_COLOR = '#333333';
const DEFAULT_GRID = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_GRID;

const container = document.getElementById("grid-container");

const slider = document.getElementById("slider");
currentSize = slider.value;




const btn = document.getElementById("clear");
btn.addEventListener('click', clear);

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
2
function color(e){
    if (e.type === 'mouseover' && !mouseDown)return
    e.target.style.backgroundColor = currentColor;
}


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        cell.addEventListener('mouseover', color);
        cell.addEventListener('mousedown', color);
        container.appendChild(cell).className = "grid-item";
    };
};

// function colorSelection(color){
//     // will need to take in color values 
//     // assign color to event of drawing 
// }


const x = currentSize;
const y = currentSize;
makeRows(x,y);

slider.oninput = (e) => {
    currentSize = this.value;
    clear();
    makeRows(x,y);
}


// Clears the grid
function clear(){
    container.innerHTML = '';
    makeRows(x,y);
}
// const divs = document.getElementsByClassName('grid-item');
// const color = "#002b36";

// colorSelection(color);