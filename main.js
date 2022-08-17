
 function createBoard(number) {
    document.getElementById('container').innerHTML = "";
    for (i = 0; i < number; i++) {
        let tile = document.createElement('div');
        tile.className = 'tile';
        document.getElementById('container').appendChild(tile);
    }};

window.onload = createBoard(256);

const cells = document.querySelectorAll('div.tile');
const btn16 = document.getElementById('16');
const btn36 = document.getElementById('36');
const btn64 = document.getElementById('64');
const btnReset = document.getElementById('reset');
const btnColor = document.getElementById('color');

function clearGrid () {
    container.innerHTML = "";
}



btn16.addEventListener('click', function() {
    clearGrid();
    createBoard(256);
})

btn36.addEventListener('click', function() {
    clearGrid();
    createBoard(1296);
})

cells.forEach(cell => {
    cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = 'blue';
    })
});