// Defines default values
const container = document.getElementById("grid-container");
const DEFAULT_COLOR = '#333333';
const DEFAULT_GRID = 16;

// Sets defaults
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_GRID;
let highlightedColor = currentColor;
let currentCellColor = "";

//Creates the grid
makeRows(currentSize);

// Clears The grid
const btn = document.getElementById("clear");
btn.addEventListener("click", clear);

// Will add an mouse click event listener
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Paints with selected color
function color(e){
    const colorPicker = document.getElementById("color");
    currentColor = colorPicker.value;
    colorPicker.oninput = (e) => {
        currentColor = color.value;
    }

    if (e.type === 'mouseover' && !mouseDown)return
    e.target.style.backgroundColor = currentColor;
};

function highlight(e){
    currentCellColor = e.getPropertyValue("background-color");
    console.log(currentCellColor);
};

// Creates grid using arguments as size (argument^2)
function makeRows(size) {
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", color);
        cell.addEventListener("mousedown", color);
        container.appendChild(cell).className = "grid-item";
    };
};

// const highlight = document.getElementById("grid-item");
// highlight.addEventListener("mouseenter", e => {
//     highlight.style.backgroundColor = currentColor;
// });
// highlight.addEventListener("mouseleave",e => {
//     highlight.style.backgroundColor = "";
// });
// Takes values from the slider to create new grid
const slider = document.getElementById("slider");
currentSize = slider.value;
slider.oninput = (e) => {
    currentSize = slider.value;
    makeRows(currentSize);
    clear();

}



// Clears the grid
function clear(){
    container.innerHTML = '';
    makeRows(currentSize);
}