const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook()
    });
  },
  addPhonebookPost: (req, res) => {
    let { name, number } = req.body;
    let contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect('/');
  }
}

