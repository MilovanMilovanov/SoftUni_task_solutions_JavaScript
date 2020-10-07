const contact = require('./models/Contact');

let phoneBook = [];

module.exports = {
	getPhonebook() {
		return phoneBook;
	},
	addContact(contact) {
		phoneBook.push(contact);
	},
}