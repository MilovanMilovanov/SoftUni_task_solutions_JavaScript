function orbit(arr) {
    let cols = arr.shift();
    let rows = arr.shift();
    let x = arr.shift();  // x and y are starting point cordinates
    let y = arr.shift();
    let counter = 2;
    let expand = 1;
    let matrix = [...Array(rows)].map(i => i = Array(cols).fill(0));
    matrix[x][y] = 1;

    for (let i = 1; i < matrix.length; i++) {
        for (let row = x - expand; row <= x + expand; row++) {
            if (matrix[row] == undefined) {
                continue;
            }
            for (let col = y - expand; col <= y + expand; col++) {
                if (matrix[row][col] == 0) matrix[row][col] = counter;
            }
        }
        expand++;
        counter++;
    }
    matrix.map((_, i) => matrix[i] = matrix[i].join(' '));
    console.log(matrix.join('\n'));
}
orbit(
    [4, 4, 0, 0]
)


/*
You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1. Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.
For example, we are given a matrix which has 5 rows and 5 columns and the star is at coordinates - 0, 0. Then the following should happen:
Input
The input comes as an array of 4 numbers [width, height, x, y] which represents the dimensions of the matrix and the coordinates of the star.
Output
The output is the filled matrix, with the cells separated by a space, each row on a new line.
*/