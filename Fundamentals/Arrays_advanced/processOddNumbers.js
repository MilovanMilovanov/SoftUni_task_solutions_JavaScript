function processOddNumbers(input) {
    let output = input
        .filter((_, i) => i % 2 !== 0)
        .map(i => i * 2)
        .reverse()
        .join(' ');
    console.log(output);
}
processOddNumbers(
    [10, 15, 20, 25]
    // [3, 0, 10, 4, 7, 3]
)

/*
You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/