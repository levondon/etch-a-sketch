
let gridSize = 25;
let color = '#000000'
let rgb = 0

//creates the initial HTML grid onload and is waiting to be colored in!
function createGrid() {
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


//function for the CLEAR button that clears the html grid and prompts
//the user to set a new value for the grid size
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

//function that will listen to any mousemovment on the html grid
//and color the boxes whatever the 'color' variable is set to
function sketch(event) {
    if(event.target.id == 'grid' || event.target.id == 'hovered') {
        if(rgb == 1) {
            event.target.setAttribute('id', 'hovered')
            color = getRandomColor()
            event.target.style.backgroundColor = color;
            event.target.style.borderColor = color;
        } else if(rgb == 0) {
            event.target.setAttribute('id', 'hovered');
            event.target.style.backgroundColor = color;
            event.target.style.borderColor = color;
        }
    }
}

//changes the 'color' variable based on the selected choice from the HTML page
function chooseColor() {
    color = document.getElementById('changeColor').value;

}

//changes the flag value of rgb so that if it's active the sketch fucntion will
//color in the grid as random colors
function chooseRgb() {
    if(rgb == 0) {
        rgb = 1
    } else {
        rgb = 0
        color = document.getElementById('changeColor').value;
    }
}

//when called returns a random hexdecimal value for a color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var randomColor = '#';
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }

document.getElementById('rgbBtn').addEventListener('click', chooseRgb)
document.getElementById('changeColor').addEventListener('input', chooseColor);
document.addEventListener('DOMContentLoaded', createGrid);
document.getElementById('clearBtn').addEventListener('click', clearScreen);
document.addEventListener('mouseover', sketch);





