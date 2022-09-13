function divGrid(rows, columns) {
    const gridContainer = document.getElementById("grid-container")

    for (let i = 0; i <= columns; i++) {
        const column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j <= rows; j++) {
            const row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }       
}

divGrid(16, 16);

const gridDiv = document.getElementsByClassName("row");

for (let i = 0; i < gridDiv.length; i++) {
    gridDiv[i].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    })
}


