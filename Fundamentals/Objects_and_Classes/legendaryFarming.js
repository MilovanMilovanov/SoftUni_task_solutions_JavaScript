function legendaryFarming(input) {
    let elements = input.slice(0).split(' ').map(e => e.toLowerCase());
    let keyElements = new Map([['shards', 0], ['fragments', 0], ['motes', 0]]);
    let materials = new Map();
    let remainingKeyElements = e => materials.set(e, materials.get(e) - 250);

    while (elements.length > 0) {
        let quantity = Number(elements.shift())
        let material = elements.shift()
        if (materials.has(material)) {
            quantity += materials.get(material);
        }
        materials.set(material, quantity);

        if (materials.get('shards') >= 250) {
            remainingKeyElements(material)
            console.log('Shadowmourne obtained!'); break
        } else if (materials.get('fragments') >= 250) {
            remainingKeyElements(material)
            console.log('Valanyr obtained!'); break
        } else if (materials.get('motes') >= 250) {
            remainingKeyElements(material)
            console.log('Dragonwrath obtained!'); break
        }
    }
    [...materials].forEach(([element, quantity]) => {
        keyElements.has(element) ? keyElements.set(element, quantity) : '';
    });
    let sortedKeyElements = [...keyElements].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunkMaterials = [...materials]
        .filter(e => e[0] != 'shards' && e[0] != 'fragments' && e[0] != 'motes')
        .sort((a, b) => a[0].localeCompare(b[0]));
    let print = sortedKeyElements.concat(sortedJunkMaterials)
        .forEach(([element, quantity]) => console.log(`${element}: ${quantity}`));
}
legendaryFarming(
    '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards',
    // '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)



/*
You’ve beaten all the content and the last thing left to accomplish is own a legendary item. However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do. The possible items are:
Shadowmourne – requires 250 Shards;
Valanyr – requires 250 Fragments;
Dragonwrath – requires 250 Motes;
Shards, Fragments and Motes are the key materials, all else is junk. You will be given as a string, such as 2 motes 3 ores 15 stones. Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained. Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.
Input
Input is a string  in format {quantity} {material} {quantity} {material} … {quantity} {material}
Output
On the first line, print the obtained item in format {Legendary item} obtained!
On the next three lines, print the remaining key materials in descending order by quantity
If two key materials have the same quantity, print them in alphabetical order
On the final several lines, print the junk items in alphabetical order
All materials are printed in format {material}: {quantity}
All output should be lowercase, except the first letter of the legendary
*/