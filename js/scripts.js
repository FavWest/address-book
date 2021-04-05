// Business Logic for AddressBook
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function() {
  this.currentId ++;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  if(this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  if(this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}
// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

let addressBook = new AddressBook();
let contact = new Contact("Jerry", "Sullivan", "4568675309");
let contact2 =  new Contact("Steve", "Pitts", "8885882300");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.deleteContact(2);