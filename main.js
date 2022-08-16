 function createBoard() {
    for (i = 0; i < 256; i++) {
        let tile = document.createElement('div');
    tile.className = 'tile';
    
    document.getElementById('container').appendChild(tile);
    
    }
}

window.onload = createBoard();

const cells = document.querySelectorAll('div.tile');

cells.forEach(cell => {
    cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = 'blue';
    })
})
