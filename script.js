function addDiv(gridNum) {
    const divContainer = document.getElementById("grid-container")

    for (let i = 0; i < gridNum; i++) {
        const newDiv = document.createElement("div");
        divContainer.appendChild(newDiv);
    }
}

addDiv(16);