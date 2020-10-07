function tseamAccount(arr) {
    let gameAccount = arr.shift().split(' ');
    for (let i of arr) {
        let [command, game] = i.split(' ');
        switch (command) {
            case 'Install':
                gameAccount.indexOf(game) < 0 ?
                    gameAccount.push(game) : ''; break;
            case 'Uninstall':
                gameAccount.indexOf(game) >= 0 ?
                    gameAccount.splice(gameAccount.indexOf(game), 1) : ''; break;
            case 'Update':
                gameAccount.indexOf(game) >= 0 ?
                    gameAccount.push((gameAccount.splice(gameAccount.indexOf(game), 1)).toString()) : ''; break;
            case 'Expansion':
                let [currGame, expansion] = game.split('-');
                gameAccount.indexOf(currGame) >= 0 ?
                    gameAccount.splice((gameAccount.indexOf(currGame) + 1), 0, `${currGame}:${expansion}`) : ''; break;
            default: break;
        }
    }
    console.log(gameAccount.join(' '));
}
tseamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
])



/*
As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with all of his games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does with his account.`
You may receive the following commands:
Install {game}
Uninstall {game}
Update {game}
Expansion {game}-{expansion}
If you receive Install command, you should add the game at last position in the account, but only if it isn't installed already.
If you receive Uninstall command, delete the game if it exists.
If you receive Update command, you should update the game if it exists and place it on last position.
If you receive Expansion command, you should check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
Input
On the first input line you will receive Peter`s account - sequence of game names, separated by space.
Until you receive "Play!" you will be receiving commands. 
Output
As output you must print Peter`s Tseam account. 
Constraints
The command will always be valid.
The game and expansion will be strings and will contain any character, except '-'.
Allowed working time / memory: 100ms / 16MB.
*/