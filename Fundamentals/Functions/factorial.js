function factorialDivision(integerOne, integerTwo) {
    function factorial(integer) {
        if (integer == 1) {
            return 1;
        } else {
            return integer * factorial(integer - 1);
        }
    }
    let factorialOne = factorial(integerOne);
    let factorialTwo = factorial(integerTwo);
    let output = factorialOne / factorialTwo;
    console.log(output.toFixed(2));
}
factorialDivision(
    5, 2
)


/*
Write a function that receives two integer numbers.Calculate factorial of each number.
Divide the first result by the second and print the division formatted to the second decimal point.
*/