function mergeArr(arr1, arr2) {
    [arr1, arr2] = [arr1, arr2].map(e => e.map(Number));
    let output = '';
    for (let i in arr1) {
        if (i % 2 == 0) {
            output += arr1[i] + arr2[i];
        }
        else {
            output += ` - ${arr1[i]}${arr2[i]} - `;
        }
    }
    console.log(output);
} mergeArr(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)


/*
Write a function which receives two string arrays and merges them into a third array.  
If the index of the element is even, add into the third array the sum of both elements at that index
If the index of the element is odd, add the concatenation of both elements at that index
Input
As input you will receive two string arrays.
Output
As output you should print the resulting third array, each element separated by " - ".
*/