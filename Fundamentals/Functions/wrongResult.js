function wrongResult(numOne, numTwo, numThree) {
    let checkForNegative = [numOne, numTwo, numThree].filter(num => num < 0).length;
    let output = 'Negative';
    if (numOne == 0 || numTwo == 0 || numThree == 0) {
        output = 'Positive';
    } else if (checkForNegative == 0) {
        output = 'Positive';
    } else if (checkForNegative == 1) {
        output = 'Negative';
    } else if (checkForNegative == 2) {
        output = 'Positive';
    }
    console.log(output);
}
wrongResult(5, 12, -15)

/*
You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is negative or positive. 
Try to do this WITHOUT multiplying the 3 numbers.
The input comes as parameters named numOne, numTwo, numThree.
*/