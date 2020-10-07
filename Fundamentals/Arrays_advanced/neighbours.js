function neighbours(input) {
    let neighboursCount = 0;
    for (let row = 0; row < input.length; row++) {
        let checkForNeighbours = input[row]
            .filter((e, i) => {
                if (e == input[row][i + 1]) {
                    neighboursCount++;
                }
                if (input[row + 1] !== undefined) {
                    if (e == input[row + 1][i]) {
                        neighboursCount++;
                    }
                }
            });
    }
    console.log(neighboursCount);
}
neighbours([
    // ['test', 'yes', 'yo', 'ho'],
    // ['well', 'done', 'yo', '6'],
    // ['not', 'done', 'yet', '5']
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
])


/*
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of you function. Save the number of equal pairs you find and return it.
*/