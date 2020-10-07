function condensedArr(input) {
    let arr = input.slice(0);
    let condensed = [];
    while (arr.length > 1) {
        for (let i = 0; i < arr.length -1; i++) {
            condensed.push(arr[i] + arr[i + 1]);
        }
        arr = condensed;
        condensed = [];
    }
    console.log(arr[0]);
}
condensedArr(
    [5,0,4,1,2]
    // [1]
)


/*
Write a program which receives an array of numbers and condense them by summing adjacent
couples of elements until a single number is obtained. 
*/