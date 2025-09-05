function make2DArray(cols: number, rows: number) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
}
let grid: number[][];
let cols = 10;
let rows = 10;

function setup() {
    grid = make2DArray(cols, rows);
}