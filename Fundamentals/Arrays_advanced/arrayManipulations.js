function arrayManipulation(input) {
    let arrNumbers = input.shift().split(' ').map(Number);

    for (let line of input) {
        let [command, integer, index] = line.split(' ');
        integer = Number(integer);
        switch (command) {
            case 'Add': {
                arrNumbers.push(integer);
            } break;
            case 'Remove': {
                arrNumbers.filter(i => i == integer ? arrNumbers.splice(arrNumbers.indexOf(i), 1) : '');
            } break;
            case 'RemoveAt': {
                arrNumbers.splice(integer, 1);
            } break;
            case 'Insert': {
                arrNumbers.splice(Number(index), 0, integer);
            } break;
            default: break;
        }
    }
    console.log(arrNumbers.join(' '));
}
arrayManipulation([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])


/*
Write a function that manipulates an array of numbers. 
Add {number}: add a number to the end of the array
Remove {number}: remove number from the array
RemoveAt {index}: removes number at a given index
Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
Print the final state of the array (separated by single space).
The input comes as array of strings. First element will be a string containing the array to manipulate. Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.
*/