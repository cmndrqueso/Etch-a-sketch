// Defines default values
const container = document.getElementById("grid-container");
const DEFAULT_COLOR = '#333333';
const DEFAULT_GRID = 16;

// Sets defaults
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_GRID;

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
    const highlight = document.getElementsByClassName("grid-item :hover");
    
    currentColor = colorPicker.value;
    colorPicker.oninput = (e) => {
        currentColor = color.value;
    }

    if (e.type === 'mouseover' && !mouseDown)return
    e.target.style.backgroundColor = currentColor;
}

// Creates grid using arguments as size (argument^2)
function makeRows(size) {
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        cell.addEventListener("mouseover", color);
        cell.addEventListener("mousedown", color);
        container.appendChild(cell).className = "grid-item";
    };
};

// Takes values from the slider to create new grid
const slider = document.getElementById("slider");
currentSize = slider.value;
slider.oninput = (e) => {
    currentSize = slider.value;
    makeRows(currentSize);
    clear();
}



// function colorSelection(color){
//     // will need to take in color values 
//     // assign color to event of drawing 
// }

// Clears the grid
function clear(){
    container.innerHTML = '';
    makeRows(currentSize);
}