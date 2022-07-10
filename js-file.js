// get container
let container = document.getElementById('container');

function createGrid(rows, cols, cellSize) {       
    for(let i = 0; i < rows; i++){
        // add empty row
        let row = createRow(cols, cellSize);            
    }       
}

// create single row with cols placeholders
function createRow(cols, cellSize) {
    // create row div
    let row = document.createElement('div');
    row.className = 'row';

    for(let i = 0; i < cols; i++) {
        // create single cell
        let cell = createCell(cellSize);

        // add cell to row
        row.appendChild(cell);
    }

    // add row to container
    container.appendChild(row);
}

// create a size x size square div and add it to row
function createCell(size) {
    let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = size;
        cell.style.height = size;

    return cell;
}

createGrid(16, 16, '45px');