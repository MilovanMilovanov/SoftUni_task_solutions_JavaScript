function gladiatorInventory(arrStrings) {
    let inventory = arrStrings.shift().split(' ');

    while (arrStrings.length > 0) {
        let [command, item] = arrStrings.shift().split(' ');
        switch (command) {
            case 'Buy': {
                !inventory.includes(item) ? inventory.push(item) : '';
            } break;
            case 'Trash': {
                inventory.includes(item) ? inventory.splice(inventory.indexOf(item), 1) : '';
             } break;
            case 'Repair': {
                inventory.includes(item) ? inventory.push(inventory.splice(inventory.indexOf(item), 1)) : '';
              }  break;
            default: {
                let [existingItem, upgrade] = item.split('-');
                inventory.includes(existingItem) ?
                inventory.splice(inventory.indexOf(existingItem) + 1, 0, `${existingItem}:${upgrade}`) : '';
            } break;
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
])


/*
As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
You may receive the following commands:
⦁	Buy {equipment}
⦁	Trash {equipment}
⦁	Repair {equipment}
⦁	Upgrade {equipment}-{upgrade}
If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
If you receive Trash command, delete the equipment if it exists.
If you receive Repair command, you should repair the equipment if it exists and place it on last position.
If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";
Input / Consrtaints
You will receive an array of strings. Each element of the array is a command.
⦁	In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by space.
Output
As output you must print Peter's inventory. 
Constraints
The command will always be valid.
The equipment and Upgrade will be strings and will contain any character, except '-'.
Allowed working time / memory: 100ms / 16MB
*/