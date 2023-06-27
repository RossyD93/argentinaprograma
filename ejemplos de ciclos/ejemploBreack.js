let contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322',
'Mary:9998769', 'Dianne:9384975'];
let searchName = "Mary";
let text = "";
for (let i = 0; i < contacts.length; i++) {
let splitContact = contacts[i].split(':');
if (splitContact[0] === searchName) {
text = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
break;
} else {
text = 'Contact not found.';
}
}
console.log(text);