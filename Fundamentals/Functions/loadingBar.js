function loadingBar(input) {
    let percent = input / 10;
    let result = '';
    if (input == 100) {
        result = '100% Complete!\n';
        result += `${input}% [${'%'.repeat(percent)}${'.'.repeat(10 - percent)}]`;
    } else {
        result = `${input}% [${'%'.repeat(percent)}${'.'.repeat(10 - percent)}]\n`;
        result += 'Still loading...';
    }
    console.log(result);
}
loadingBar(
30
)



/*
You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualize a loading bar depending on that number you have received in the input.
*/