function bookCategories(input) {
    let bookCategories = new Map();

    for (let command of input) {
        if (command.includes('->')) {
            let [id, shelf] = command.split(' -> ');
            if (!bookCategories.has(id)) {
                bookCategories.set(id, [shelf]);
            }
        } else {
            let book = command.split(':')[0];
            let [author, category] = command.split(': ')[1].split(', ');
            for (let [id, shelf] of [...bookCategories]) {
                if (shelf[0] === category) {
                    bookCategories.get(id).push(` --> ${book}: ${author}`);
                }
            }
        }
    }
    let sortById = [...bookCategories].sort((a, b) => b[1].length - a[1].length)
        .forEach(element => {
            let [id, shelf] = element;
            let [category, ...books] = shelf;
            console.log(` ${id} ${category}: ${books.length}`);
            let sortByTitle = books.sort((a, b) => a - b)
                .forEach(book => {
                    console.log(book);
                });
        });
}
bookCategories([
    '1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']
)

/*
Write a function that stores information about shelfs and the books in the shelfs. Each shelf has an Id and a genre of books that can be in it. Each book has a title, an author and genre. The input comes as an array of strings. They will be in the format:
"{shelf id} -> {shelf genre}" – create a shelf if the id is not taken.
"{book title}: {book author}, {book genre}" – if a shelf with that genre exists, add the book to the shelf
After finished reding input, sort the shelfs by count of books in it in descending. For each shelf sort the books by title in ascending. Then print them in the following format
"{shelfOne id} {shelf genre}: {books count}
--> {bookOne title}: {bookOne author}
--> {bookTwo title}: {bookTwo author}
…
{shelfTwo id} {shelf genre}: {books count}
…"
*/