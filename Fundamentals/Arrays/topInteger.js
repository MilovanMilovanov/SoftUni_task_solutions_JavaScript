function topInteger(arr) {
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        let biggestNum = true;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] <= arr[k]) {
                biggestNum = false;
                break;
            }
        }
        if (biggestNum == true) {
            output += `${arr[i]} `;
        }
    }
    console.log(output);
}
topInteger(
    [1, 2, 3, 4, 6, 6, 10, 2]
)

/*
Write a function to find all the top integers in an array.
A top integer is an integer which is bigger than all the elements to its right. 
*/