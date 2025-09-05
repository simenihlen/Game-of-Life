import p5 from "p5";

function make2DArray(cols: number, rows: number) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}
let grid: number[][];
let cols: number;
let rows: number;
let resolution = 40;

function setup() {
    p5.createCanvas(400, 400);
    cols = p5.width / resolution;
    rows = p5.height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = p5.floor(p5.random(2));
        }
    }
}

function draw() {
    p5.background(0);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                p5.fill(255);
                p5.rect(x, y, 20, 20);
            }
            p5.rect(x, y, resolution, resolution);
        }
    }
}