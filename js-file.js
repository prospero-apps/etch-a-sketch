// get container
const container = document.getElementById('container');
const containerSize = 800;

// get the button
const button = document.getElementById('resolution');
button.addEventListener('click', () => {
    let res = prompt("How many squares per side (max. 100)",
                     "Enter a value between 2-100.");
    
    // min and max square count
    if(res < 2) res = 2;
    if(res > 100) res = 100;

    // remove all from container and create new grid
    container.replaceChildren();
    createGrid(res);
})

function createGrid(cellCount) {
    let cellSize = containerSize / cellCount;

    for (let i = 0; i < cellCount; i++) {
        // add one row of cells
        let row = createRow(cellCount, cellSize);
    }
}

// create single row with cellCount placeholders
function createRow(cellCount, cellSize) {
    // create row div
    let row = document.createElement('div');
    row.className = 'row';

    for (let i = 0; i < cellCount; i++) {
        // create single cell
        let cell = createCell(cellSize);

        // add cell to row
        row.appendChild(cell);
    }

    // add row to container
    container.appendChild(row);
}

// create a cellSize x cellSize square div and add it to row
function createCell(cellSize) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';

    // control painting ability
    let paint = true;

    // paint cell when mouse enters
    cell.addEventListener('mouseenter', () => {
        if(paint) cell.classList.add('painted');
    });
 
    // left-click to disable painting
    container.addEventListener('click', (e) => {
        if(e.button == 0) {
            paint = !paint;
        }
    })
 
    return cell;
}

// createGrid(16, 16, '45px');
createGrid(16);