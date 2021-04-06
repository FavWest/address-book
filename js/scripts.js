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
function Contact(firstName, lastName, phoneNumber, email, physicalAddress, city, state, zip) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.allAddresses = {1:{"physicalAddress":physicalAddress,
                                "city":city,
                                "state":state,
                                "zip": zip}};
}

function Address (relation, physicalAddress, city, state, zip) {
  this.relation = relation;
  this.physicalAddress = physicalAddress;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.addAddress = function(address){
  this.allAddresses[relation] = address;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

let addressBook = new AddressBook();


//UI logic
$(document).ready(function() {
$("form#contactInput").submit(function(event) {
  event.preventDefault()
  
  const firstName = $("input#firstName").val()
  const lastName = $("input#lastName").val()
  const phoneNumber = $("input#phoneNumber").val()
  const email = $("input#email").val()

  const homePhysicalAddress = $("input#physical-address#inputHomeAddress").val();
  const homeCity = $("input#city#inputHomeAddress").val();
  const homeState = $("input#state#inputHomeAddress").val();
  const homeZip = $("input#zip#inputHomeAddress").val();


  const workPhysicalAddress = $("input#physical-address#inputWorkAddress").val();
  const workCity = $("input#city#inputWorkAddress").val();
  const workState = $("input#state#inputWorkAddress").val();
  const workZip = $("input#zip#inputWorkAddress").val();
  const newAddress1 = new Address("Home", homePhysicalAddress, homeCity, homeState, homeZip);
  const newAddress2 = new Address("Work", workPhysicalAddress, workCity, workState, workZip);
  const newContact = new Contact(firstName, lastName, phoneNumber, email, addresses);

  addressBook.Contact.addAddress(newAddress1);
  addressBook.Contact.addAddress(newAddress2);
  addressBook.addContact(newContact);
  
  
  function contactOutput (){
   $("span.first-name").text(addressBook.contacts[1].firstName)
   $("span.last-name").text(addressBook.contacts[1].lastName)
   $("span.phone-number").text(addressBook.contacts[1].phoneNumber)
   $("span.email-address").text(addressBook.contacts[1].email)
   $("span.full-physical-address").html(
            addressBook.contacts[1].allAddresses[1].physicalAddress + "<br>" +
            addressBook.contacts[1].allAddresses[1].city + " " + 
            addressBook.contacts[1].allAddresses[1].state + " " +
            addressBook.contacts[1].allAddresses[1].zip)
  }
  contactOutput();

  })


})