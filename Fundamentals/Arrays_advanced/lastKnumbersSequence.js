function lastKnumbersSequence(arrLength, sequence) {
    let arrNumbers = [1, 1];
    for (let i = 2; i < arrLength; i++) {
        let kSequence = arrNumbers.slice(Math.max(i - sequence, 0));
        let resultedNumber = kSequence.reduce((a, b) => a + b);
        arrNumbers.push(resultedNumber);
    }
    console.log(arrNumbers.join(' '));
}
lastKnumbersSequence(
    6, 3
)

/*
You are given two integers n and k. Write a function that generates and prints the following sequence:
⦁	The first element is 1.
⦁	Every following element equals the sum of the previous k elements.
⦁	The length of the sequence is n elements.
	
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
*/