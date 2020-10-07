function diagonalAttack(arr) {
    let matrix = arr.slice(0);
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let rightDiagonal = matrix.length - 1
    let output = '';

    for (let row = 0; row < arr.length; row++) {
        matrix[row] = matrix[row].split(' ').map(Number);
    }
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
        rightDiagonalSum += matrix[i][rightDiagonal--];
    }
    if (leftDiagonalSum == rightDiagonalSum) {
        rightDiagonal = matrix.length;
        for (let i = 0; i < matrix.length; i++) {
            rightDiagonal--;
            for (let k = 0; k < matrix.length; k++) {
                if (k !== i && k !== rightDiagonal) {
                    matrix[i][k] = leftDiagonalSum;
                }
            }
        }
        for (let line of matrix) {
            output += `${line.join(' ')}\n`;
        }
        console.log(output);
    } else {
        console.log(arr.join('\n'))
    }
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])



/*
Write a function that reads a given matrix of numbers, and checks if both main diagonals have equal sum. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
Input
The input comes as array of strings. Each element represents a string of numbers, with spaces between them. Parse it into a matrix of numbers, so you can work with it.
Output
The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum or the original matrix, if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below. 
*/