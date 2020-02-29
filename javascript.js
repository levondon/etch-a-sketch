
let gridSize = 100;
//let mouseId = -1;


function clearScreen() {
    gridSize = 0
    gridSize = parseInt(prompt('How many squares? Ex: enter 10 if you want a 10x10 grid', 100));
    console.log(typeof gridSize);
    while((gridSize < 0) || (gridSize >= 200) || isNaN(gridSize)) {
        gridSize = parseInt(prompt('Choose a grid size between 1 and 200'));
    }
    
    const clearGrid = document.getElementById('containerDiv');

    while(clearGrid.firstChild) {
        clearGrid.removeChild(clearGrid.lastChild)
    }
    for(let i = 0; i < gridSize**2; i++) {
        let container = document.getElementById('containerDiv')
        let div = document.createElement('div');
        let root = document.documentElement;
        root.style.setProperty('--grid-size', gridSize)
        div.setAttribute('id', 'grid');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

function sketch(event) {
    if(event.target.id == 'grid') {
        event.target.setAttribute('id', 'hovered');
    }
}

for(let i = 0; i < gridSize**2; i++) {
    let container = document.getElementById('containerDiv')
    let div = document.createElement('div');
    div.setAttribute('id', 'grid');
    div.classList.add('grid');
    container.appendChild(div);
}

document.getElementById('clearBtn').addEventListener('click', clearScreen)
document.addEventListener('mousemove', sketch);

/*document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
document.addEventListener('mouseout', mouseUp)*/

/*function mouseDown(event) {
    if(mouseId == -1) {
        mouseId = setInterval(sketch(event), 10);
    }
}

function mouseUp(event) {
    if(mouseId != -1) {
        clearInterval(mouseId)
        mouseId = -1
    }
}*/




