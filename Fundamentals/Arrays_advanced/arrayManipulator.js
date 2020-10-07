function arrayManipulation(arrIntegers, arrCommands) {
    for (let command of arrCommands) {
        command = command.split(' ');
        switch (command.shift()) {
            case 'add': {
                let [index, element] = command;
                !isNaN(element) ? element = Number(element) : '';
                arrIntegers.splice(Number(index), 0, element);
            } break;
            case 'addMany': {
                let elements = command
                    .map((e, i) => !isNaN(command[i]) ? command[i] = Number(command[i]) : e);
                arrIntegers.splice(elements.shift(), 0, ...elements);
            } break;
            case 'contains': {
                console.log(arrIntegers.indexOf(Number(command)));
            } break;
            case 'remove': {
                arrIntegers.splice(command, 1);
            } break;
            case 'shift': {
                let rotations = command != 1 ? Number(command) % arrIntegers.length : 1;
                while (rotations-- > 0) {
                    arrIntegers.push(arrIntegers.shift());
                }
            } break;
            case 'sumPairs': {
                arrIntegers
                    .map((_, i) => arrIntegers
                        .unshift(arrIntegers.splice(i, 2).reduce((a, b) => a + b)))
                    .reverse();
            } break;
            default: return console.log(`[ ${arrIntegers.join(', ')} ]`);
        }
    }
}
arrayManipulation(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    // [1, 2, 3, 4, 5],
    // ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)

/*
Write a function that receives an array of integers and array of string commands and executes them over the array. The commands are as follows:
add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.remove <index> – removes the element at the specified index.	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].	print – stop receiving more commands and print the last state of the array.
*/