// get container
const container = document.getElementById('container');
const containerSize = 800;

// get the button
const button = document.getElementById('resolution');
button.addEventListener('click', () => {
    let res = prompt("How many squares per side (max. 100)",
        "Enter a value between 2-100.");

    // min and max square count
    if (res < 2) res = 2;
    if (res > 100) res = 100;

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
    let cellPainted = false;
    let timesPainted = 0;

    // paint cell when mouse enters
    let red, green, blue;
    let redComponent, greenComponent, blueComponent;
    let newRed, newGreen, newBlue;

    cell.addEventListener('mouseenter', () => {
        if(paint) {       
            if (!cellPainted) {
                red = Math.floor(Math.random() * 256)
                green = Math.floor(Math.random() * 256)
                blue = Math.floor(Math.random() * 256)

                redComponent = Math.floor(red / 10);
                greenComponent = Math.floor(green / 10);
                blueComponent = Math.floor(blue / 10);

                let cellColor = `rgb(${red}, ${green}, ${blue})`;
                cell.style.backgroundColor = cellColor;
                cellPainted = true;
            }
            else {                                
                if(newRed !== 0 || newGreen !== 0 || newBlue !== 0) {
                    timesPainted++;
                    newRed = red - redComponent * timesPainted;
                    newGreen = green - greenComponent * timesPainted;
                    newBlue = blue - blueComponent * timesPainted;

                    if(newRed < 0) newRed = 0;
                    if(newGreen < 0) newGreen = 0;
                    if(newBlue < 0) newBlue = 0;

                    let cellColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
                    cell.style.backgroundColor = cellColor;
                }            
            }
        }
    });

    // left-click to disable painting
    container.addEventListener('click', (e) => {
        if (e.button == 0) {
            paint = !paint;
        }
    })

    return cell;
}

createGrid(16);