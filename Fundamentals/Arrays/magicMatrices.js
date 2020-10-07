function magicMatrices(input) {
    let sum = 0;
    let firstLineSum = input[0].reduce((a, b) => a + b);
    for (let row in input) {
        for (let col in input) {
            sum += input[col][row];
        }
        if (firstLineSum !== sum) {
            return console.log(false);
        }
        sum = 0;
    }
    console.log(true);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])


/*
Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
Input
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
Output
The output is a Boolean result indicating whether the matrix is magical or not.
*/