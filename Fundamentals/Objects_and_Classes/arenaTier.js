function arenaTier(input) {
    let arena = new Map();

    function techniquesInCommon(gladiatorOne, gladiatorTwo) {
        let items = gladiator => [...arena.get(gladiator)].map(e => e[0])
        return items(gladiatorOne).filter(e => items(gladiatorTwo).includes(e))
    }

    function duel(gladiatorOne, gladiatorTwo) {
        return totalSkill(gladiatorOne) > totalSkill(gladiatorTwo) ? gladiatorOne : gladiatorTwo
    }

    function totalSkill(gladiator) {
        return [...arena.get(gladiator)].map(e => e[1]).reduce((a, b) => a + b);
    }

    for (let command = 0; input[command] != 'Ave Cesar'; command++) {
        if (input[command].includes('->')) {

            let [name, item, skill] = input[command].split(' -> ');
            skill = Number(skill);
            if (!arena.has(name)) {
                arena.set(name, new Map())
            }
            if (arena.get(name).has(item)) {
                let initialSkill = arena.get(name).get(item);
                if (initialSkill < skill) {
                    arena.get(name).set(item, skill)
                }
            } else {
                arena.get(name).set(item, skill)
            }

        } else {

            let [gladiatorOne, gladiatorTwo] = input[command].split(' vs ');
            if (arena.has(gladiatorOne) && arena.has(gladiatorTwo)) {
                if (techniquesInCommon(gladiatorOne, gladiatorTwo).length > 0) {
                    if (duel(gladiatorOne, gladiatorTwo) === gladiatorOne) {
                        arena.delete(gladiatorTwo)
                    } else {
                        arena.delete(gladiatorOne)
                    }
                }
            }
        }
    }
    let arenaArr = [...arena];
    let addTotalSkill = arenaArr.forEach(e => e.push(totalSkill(e[0])));
    let sortBySkill = arenaArr.sort((a, b) => b[2] - a[2]);
    let print = arenaArr.forEach(([name, techniques, totalSkill]) => {
        console.log(`${name}: ${totalSkill} skill`);
        let sortTechniques = [...techniques]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([item, skill]) => console.log(`- ${item} <!> ${skill}`));
    });
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    // 'Pesho -> Duck -> 400',
    // 'Julius -> Shield -> 150',
    // 'Gladius -> Heal -> 200',
    // 'Gladius -> Support -> 250',
    // 'Gladius -> Shield -> 250',
    // 'Peter vs Gladius',
    // 'Gladius vs Julius',
    // 'Gladius vs Maximilian',
    // 'Ave Cesar'
])


/*
Pesho is a pro gladiator, he is struggling to become master of the Arena. 
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique or update his skill, only if the current technique skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
If they don't have techniques in common, the duel isn't happening and both continue in the Season.
You should end your program when you receive the command "Ave Cesar". At that point you should print the gladiators, ordered by total skill in desecending order, then ordered by name in ascending order. Foreach gladiator print their technique and skill, ordered desecending, then ordered by technique name in ascending order
Input / Constraints
You will receive an array of strings as a parameter to your solution.
The input comes in the form of commands in one of the formats specified above.
Gladiator and technique will always be one word string, containing no whitespaces.
Skill will be an integer in the range [0, 1000].
There will be no invalid input lines.
The programm ends when you receive the command "Ave Cesar".

Output
The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"
*/
