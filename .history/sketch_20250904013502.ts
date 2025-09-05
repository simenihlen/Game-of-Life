function make2DArray(cols: number, rows: number) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
}
let grid: number[][];

function setup() {
    grid = make2DArray(10, 10);
}