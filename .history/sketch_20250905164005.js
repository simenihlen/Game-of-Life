function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}
let grid;
let cols;
let rows;
let resolution = 20;

function setup() {
    createCanvas(600, 400);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                stroke(0);
                rect(x, y, resolution, resolution);
            }
        }
    }

    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let sum = 0;
            let neighbors = count(grid, i, j);

            // sum += grid[i - 1][j - 1];
            // sum += grid[i][j - 1];
            // sum += grid[i + 1][j - 1];
            // sum += grid[i + 1][j];
            // sum += grid[i + 1][j + 1];
            // sum += grid[i][j + 1];
            // sum += grid[i - 1][j + 1];
            // sum += grid[i - 1][j];
        }
    }

    grid = next;
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            sum += grid[i][j];
        }
    }
    sum -= grid[x][y];
}