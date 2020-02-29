
let gridSize = 25;
let color = '#000000'

function clearScreen() {
    gridSize = 0
    gridSize = parseInt(prompt('How many squares? Ex: enter 10 if you want a 10x10 grid', 25));
    console.log(typeof gridSize);
    while((gridSize < 0) || (gridSize > 100) || isNaN(gridSize)) {
        gridSize = parseInt(prompt('Choose a grid size between 1 and 100', 25));
    }
    
    const clearGrid = document.getElementById('containerDiv');

    while(clearGrid.firstChild) {
        clearGrid.removeChild(clearGrid.lastChild)
    }
    createGrid()
}

function sketch(event) {
    if(event.target.id == 'grid' || event.target.id == 'hovered') {
        event.target.setAttribute('id', 'hovered');
        event.target.style.backgroundColor = color;
        event.target.style.borderColor = color;
    }
}

function createGrid() {
    console.log("HERE");
    for(let i = 0; i < gridSize**2; i++) {
        let container = document.getElementById('containerDiv')
        let div = document.createElement('div');
        let rootSize = document.documentElement;
        rootSize.style.setProperty('--grid-size', gridSize)
        div.setAttribute('id', 'grid');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

function chooseColor() {
    color = document.getElementById('changeColor').value;

}

document.getElementById('changeColor').addEventListener('input', chooseColor)
document.addEventListener('DOMContentLoaded', createGrid);
document.getElementById('clearBtn').addEventListener('click', clearScreen);
document.addEventListener('mousemove', sketch);





