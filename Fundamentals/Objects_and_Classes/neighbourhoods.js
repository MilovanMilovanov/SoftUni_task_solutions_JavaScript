function neighbourhoods(input) {
    let neighbourhoods = input.slice(0);
    let inhabitants = new Map(neighbourhoods
        .shift()
        .split(', ')
        .map(neighbourhood => [neighbourhood, []]));
    neighbourhoods.forEach(data => {
        let [neighbourhood, person] = data.split(' - ');
        if (inhabitants.has(neighbourhood)) {
            inhabitants.get(neighbourhood).push(person);
        }
    });
    let sortAndPrint = [...inhabitants]
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([neighbourhood, inhabitants]) => {
            console.log(`${neighbourhood}: ${inhabitants.length}`);
            inhabitants.forEach(person => {
                console.log(`--${person}`);
            })
        });
}
neighbourhoods([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])


/*
Write a function that receives list of neighborhoods and then some people, who are going to live in it. The input will come as array of strings. The first element will be the list of neighborhoods separated by ", ". The rest of the elements will be a neighborhood followed by a name of a person in the format "{neighborhood} - {person}". Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. At the end print the neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format:
"{neighborhood}: {inhabitants count}
--{1st inhabitant}
--{2nd inhabitant}
…"
*/