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
function Contact(firstName, lastName, phoneNumber, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.allAddresses = {};
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Business Logic for Addresses
function Address (relation, physicalAddress, city, state, zip) {
  this.relation = relation;
  this.physicalAddress = physicalAddress;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.addAddress = function(address){
  let id =  address.relation;
  this.allAddresses[id] = address;
}




let addressBook = new AddressBook();

//UI logic
$(document).ready(function() {
$("form#contactInput").submit(function(event) {
  event.preventDefault()
  
  const firstName = $("input#firstName").val();
  const lastName = $("input#lastName").val();
  const phoneNumber = $("input#phoneNumber").val();
  const email = $("input#email").val();

  const homePhysicalAddress = $(".physical-address.inputHomeAddress").val();
  const homeCity = $(".city.inputHomeAddress").val();
  const homeState = $(".state.inputHomeAddress").val();
  const homeZip = $(".zip.inputHomeAddress").val();
  console.log($(".state.inputHomeAddress").val());

  const workPhysicalAddress = $(".physical-address.inputWorkAddress").val();
  const workCity = $(".city.inputWorkAddress").val();
  const workState = $(".state.inputWorkAddress").val();
  const workZip = $(".zip.inputWorkAddress").val();
  const newAddress1 = new Address("Home", homePhysicalAddress, homeCity, homeState, homeZip);
  const newAddress2 = new Address("Work", workPhysicalAddress, workCity, workState, workZip);
  const newContact = new Contact(firstName, lastName, phoneNumber, email);

  newContact.addAddress(newAddress1);
  newContact.addAddress(newAddress2);
  addressBook.addContact(newContact);
  
  
  function contactOutput (){
   $("span.first-name").text(addressBook.contacts[1].firstName)
   $("span.last-name").text(addressBook.contacts[1].lastName)
   $("span.phone-number").text(addressBook.contacts[1].phoneNumber)
   $("span.email-address").text(addressBook.contacts[1].email)
    console.log(addressBook.contacts[1].allAddresses.Home.physicalAddress);
   $("span.home-physical-address").html( 
            addressBook.contacts[1].allAddresses.Home.physicalAddress + "<br>" +
            addressBook.contacts[1].allAddresses.Home.city + " " + 
            addressBook.contacts[1].allAddresses.Home.state + " " +
            addressBook.contacts[1].allAddresses.Home.zip
            );
   $("span.work-physical-address").html(
            addressBook.contacts[1].allAddresses.Work.physicalAddress + "<br>" +
            addressBook.contacts[1].allAddresses.Work.city + " " + 
            addressBook.contacts[1].allAddresses.Work.state + " " +
            addressBook.contacts[1].allAddresses.Work.zip
   );
  }
  contactOutput();

  })


})