const grid = document.querySelector('#grid');
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.sliderOutput');

function fillGrid(cols, rows) {
    for (c = 0; c < (cols * rows); c++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
    }
}

fillGrid(slider.value, slider.value);

function drawEffect() {
    const cells = document.querySelectorAll("#grid div");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function () {
            cells[i].classList.add('activeCell');
        })
    }
}

function removeDivs(grid) {
    while (grid.firstChild) grid.removeChild(grid.firstChild);
}

sliderOutput.textContent = slider.value

slider.addEventListener('input', function () {
    sliderOutput.textContent = slider.value
    grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
    removeDivs(grid)
    fillGrid(slider.value, slider.value)
    drawEffect()
});

