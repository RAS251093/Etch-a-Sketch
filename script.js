const userBtn = document.getElementById("gridSizeBtn").onclick = userPrompt;
const gridContainer = document.getElementById("grid-container");
const currentGridSize = document.getElementById("current-size");

let gridSize = 16;

function currentSize(gridSize) {
    currentGridSize.innerText = `Current grid size is: ${gridSize} * ${gridSize}`;
}

function createGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;     
    
    for (let i= 0; i < gridSize * gridSize; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.id = "grid-element";

        gridDiv.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        })
        gridContainer.appendChild(gridDiv);
    }
}

function deleteGrid() {    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function userPrompt() {
    gridSize = prompt("Please enter a desired grid size less than 100.");

    if (gridSize > 100) {
        alert("Grid size greater than 100, try again.");
        return;
    }

    deleteGrid();
    createGrid(gridSize);
    currentSize(gridSize);
}

createGrid(gridSize);
currentSize(gridSize);


