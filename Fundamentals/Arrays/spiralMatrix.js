function spiralMatrix(cols, rows) {
    let matrixSize = cols * rows;
    let matrix = [];
    let integerIncrease = 1;
    let currentLine = 0;
    let output = '';

    for (let i = 0; i < rows; i++) {
        matrix.push(Array(cols).fill(0));
    }

    while (integerIncrease <= matrixSize) {
        for (let top = currentLine; top < rows; top++) {
            matrix[currentLine][top] = integerIncrease++;
        }
        for (let right = currentLine + 1; right < rows; right++) {
            matrix[right][cols - 1] = integerIncrease++;
        }
        for (let bottom = cols - 2; bottom >= 0; bottom--) {
            if (matrix[rows - 1][bottom] == 0) {
                matrix[rows - 1][bottom] = integerIncrease++;
            }
        }
        for (let left = cols - 2; left > 0; left--) {
            if (matrix[left][currentLine] == 0) {
                matrix[left][currentLine] = integerIncrease++;
            }
        }
        cols--;
        rows--;
        currentLine++;
    }

    for (let line of matrix) {
        output += `${line.join(' ')}\n`;
    }
    console.log(output);

}
spiralMatrix(
    5, 5
)


/*
Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
Input
The input comes as 2 numbers that represent the dimension of the matrix. 
Output
The output is the matrix filled spirally starting from 1. You need to print every row on a new line, with the cells separated by a space. Check the examples below. 
*/