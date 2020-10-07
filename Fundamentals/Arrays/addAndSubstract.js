function addAndSubstract(arr) {
    let modifiedArr = [];
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        modifiedArr.push(arr[i] % 2 == 0 ? arr[i] + i : arr[i] - i);
    }

    let sumOriginal = arr.reduce((a, b) => a + b);
    let sumModified = modifiedArr.reduce((a, b) => a + b);
    output.push(modifiedArr, sumOriginal, sumModified);

    for (let printLine of output) {
        console.log(printLine);
    }
}
addAndSubstract(
    [5, 15, 23, 56, 35]
    // [-5, 11, 3, 0, 2]
)

/*
Write a function, which changes the value of odd and even numbers in an array of numbers. 
If the number is even - add to its value its index position
If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
*/