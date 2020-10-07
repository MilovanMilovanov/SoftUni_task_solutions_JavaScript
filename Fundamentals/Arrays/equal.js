function equalArrays(arr1, arr2) {
    let arrSum = 0;
    let sortedByLength = [arr1, arr2].sort((a, b) => b.length - a.length);
    [arr1, arr2] = sortedByLength;
    arr1 = arr1.map(Number);

    for (let i in arr1) {
        if (arr1[i] != arr2[i]) {
            return console.log(`Arrays are not identical. Found difference at ${i} index`);
        }
        arrSum += arr1[i];
    }
    console.log(`Arrays are identical. Sum: ${arrSum}`);
}
equalArrays(
    // ['10', '20', '30'], ['10', '20', '30']
    ['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']
)


/*
Write a program which receives two string arrays and print on the console whether they are identical or NOT. 
Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console following message: 
'Arrays are identical. Sum: {sum}'
If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
'Arrays are not identical. Found difference at {index} index'.
*/