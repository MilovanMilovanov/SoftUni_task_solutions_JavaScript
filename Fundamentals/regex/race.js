function race(input) {
    let contestants = new Map();
    let names = input.shift().split(', ');
    let getName = /[A-Za-z]+/g;
    let getDistance = /[\d]/g;

    for (let contestant of input) {
        let name = contestant.match(getName).join('');
        if (names.includes(name)) {
            let distance = contestant.match(getDistance).map(Number).reduce((a, b) => a + b);
            if (contestants.has(name)) {
                distance += contestants.get(name);
                contestants.set(name, distance);
            } else {
                contestants.set(name, distance);
            }
        }
    }
    let top3contestants = [...contestants].sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${top3contestants[0][0]}`);
    console.log(`2nd place: ${top3contestants[1][0]}`);
    console.log(`3rd place: ${top3contestants[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])


/*
Write a function that processes information about a race. On the first line you will be given list of participants separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters. In between them you could have some extra characters which you should ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the list of racers contains the name of the person. If you receive the same person more than once just add the distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
"1st place: {first racer}
2nd place: {second racer}
3rd place: {third racer}"
*/