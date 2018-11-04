function moveRight() {
    if (!current.walls[1])
        current = grid[index(current.i+1, current.j)];
}

function moveLeft() {
    if (!current.walls[3])
        current = grid[index(current.i-1, current.j)];
}

function moveTop() {
    if (!current.walls[0])
        current = grid[index(current.i, current.j-1)];
}

function moveBottom() {
    if (!current.walls[2])
        current = grid[index(current.i, current.j+1)];
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: moveLeft();
        break;
        case 38: moveTop();
        break;
        case 39: moveRight();
        break;
        case 40: moveBottom();
        break;
        default: return;
    }
    e.preventDefault();
});
