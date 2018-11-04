var cols, rows;
var w = 40;
var grid = [];

var current;
var target;

var stack = [];

function setup () {
    createCanvas(400, 400);
    cols = floor(width/w);
    rows = floor(height/w);
    // frameRate(5);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    current = grid[0];
    target = grid[rows*cols - 1];
}

function draw () {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    if (current) {
        current.visited = true;
        current .highlight();
        // STEP 1
        var next = current.checkNeighbors();
        if (next) {
            next.visited = true;
            // STEP 2
            stack.push(current);
            // STEP 3
            removeWalls(current, next);

            // STEP 4
            current = next;
        } else if (stack.length > 0) {
            var cell = stack.pop();
            current = cell;
        } else if (stack.length == 0) {
            target.final_highlight();
        }
        if (stack.length == 0 && current == target) {
            current = grid[0];
        }
    }
}
