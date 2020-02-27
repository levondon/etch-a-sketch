
let gridSize = 16

function hoverChange() {

}


for(let i = 0; i < gridSize**2; i++) {
    let container = document.getElementById('container')
    let div = document.createElement('div');
    div.innerText = "here";
    div.setAttribute('id', 'grid');
    div.classList.add('grid');
    container.appendChild(div);
}


document.addEventListener('mousemove', function(e) {
    console.log(e.target);
    e.target.setAttribute('id', 'hovered');
})


