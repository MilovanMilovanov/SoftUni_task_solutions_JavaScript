function MaxSequenceOfequalNumbers(arr) {
    let biggestSequence = [];
    let currentSequence = [];

    for (let num of arr) {
        if (currentSequence.length == 0) {
            currentSequence.push(num);
        } else if (currentSequence[0] == num) {
            currentSequence.push(num);
        } else {
            if (biggestSequence.length < currentSequence.length) {
                biggestSequence = currentSequence;
            }
            currentSequence = [num];
        }
    }
    if (biggestSequence.length < currentSequence.length) {
        biggestSequence = currentSequence;
    }
    console.log(biggestSequence.join(' '));
}
MaxSequenceOfequalNumbers(
    [2, 1, 1, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1]
)

/*
Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.
*/

