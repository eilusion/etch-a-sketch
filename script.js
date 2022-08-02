const grid = document.querySelector('#grid');

function fillGrid(cols, rows) {
    for (c = 0; c < (cols * rows); c++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
    }
}
fillGrid(16, 16);

const cells = document.querySelectorAll("#grid div");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function () {
        cells[i].classList.add('activeCell');
    })
}