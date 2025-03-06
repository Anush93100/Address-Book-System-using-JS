const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Anush", "Tenguriya", "Bhopal", "India", "In", "3245", "1234567899", "helloworld@gmail.com"
);

console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());