"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p5_1 = require("p5");
function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}
var grid;
var cols;
var rows;
var resolution = 40;
function setup() {
    p5_1.default.createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = p5_1.default.floor(p5_1.default.random(2));
        }
    }
}
function draw() {
    p5_1.default.background(0);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var x = i * resolution;
            var y = j * resolution;
            if (grid[i][j] == 1) {
                p5_1.default.fill(255);
                p5_1.default.rect(x, y, 20, 20);
            }
            p5_1.default.rect(x, y, resolution, resolution);
        }
    }
}
