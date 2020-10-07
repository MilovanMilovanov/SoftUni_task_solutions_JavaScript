function armies(input) {
    let armies = new Map();

    for (let command of input) {
        if (command.includes('arrives')) {
            let leader = command.replace(' arrives', '');
            if (!armies.has(leader)) {
                armies.set(leader, new Map());
            }
        }
        else if (command.includes(':')) {
            command = command.split(': ');
            let leader = command[0];
            if (armies.has(leader)) {
                let [army, number] = command[1].split(', ');
                armies.get(leader).set(army, Number(number));
            }
        } else if (command.includes('+')) {
            let [army, number] = command.split(' + ');
            let addArmyIfLeaderExist = [...armies].forEach(leader => {
                if (armies.get(leader[0]).has(army)) {
                    number = Number(number) + armies.get(leader[0]).get(army);
                    armies.get(leader[0]).set(army, number);
                }
            });
        } else if (command.includes('defeated')) {
            let leader = command.replace(' defeated', '');
            armies.delete(leader);
        }
    }

    armies = [...armies];

    let addTotalArmyNumber = armies.forEach(e => {
        if (e[1].size > 0) {
            let totalArmyNumber = [...e[1]].map(e => e[1]).reduce((a, b) => a + b);
            e.push(totalArmyNumber)
        } else {
            e.push(0)
        }
    });
    let sortAndPrint = armies
        .sort((a, b) => b[2] - a[2])
        .forEach(([leader, army, totalArmyNumber]) => {
            console.log(`${leader}: ${totalArmyNumber}`);
            [...army]
                .sort((a, b) => b[1] - a[1])
                .forEach(([armyName, number]) => {
                    console.log(`>>> ${armyName} - ${number}`);
                });
        });
}
armies([
    'Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000',
    'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000',
    'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'
])



/*
Write a function that stores information about an army leader and his armies. The input will be array of strings. The strings can be in some of the following formats:
"{leader} arrives" – add the leader (no army)
"{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
"{army name} + {army count}" – if the army exists somewhere add the count
"{leader} defeated" – delete the leader and his army (if he exists)
When finished reading the input sort the leaders by total army count in descending. Then each army should be sorted by count in descending.
Print in the following format:
"{leader one name}: {total army count}
>>> {armyOne name} - {army count}
>>> {armyTwo name} - {army count}
 …
{leader two name}: {total army count}
…"
Constrains
The new leaders will always be unique
When adding new army to leader, the army will be unique
*/