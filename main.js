
 function createBoard(number) {
    document.getElementById('container').innerHTML = "";
    for (i = 0; i < number; i++) {
        let tile = document.createElement('div');
        tile.className = 'tile';
        document.getElementById('container').appendChild(tile);
    }};

window.onload = createBoard(256);

const cells = document.querySelectorAll('div.tile');
const buttons = document.querySelector('#btn');

function clearGrid () {
    
}

buttons.addEventListener('click', function() {
    let number = prompt('Please select the number of tiles per row you want'); 
    if (number <= 1) {
        alert('Please choose a number higher than 1');
        return;
    } else {
        clearGrid();
        createBoard(number);
    }});

cells.forEach(cell => {
    cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = 'blue';
    })
});