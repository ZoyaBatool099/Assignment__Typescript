var guest_list = [' Naba ', ' Ayan ', ' Hunain ', ' Shayan '];
// for (let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n\n We invite you on dinner tomorrow.\n Thank You \n');
// }
var not_present = 'Ayan';
var new_guest = 'Asif';
guest_list[3] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n We invite you on dinner tomorrow.\n Thank You \n');
// }
guest_list.unshift('Sadaf', 'Abiha', 'Nibah');
// for (let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n We invite you on dinner tomorrow . we found big table so we decide to invite 3 more guests. \n Thank You \n');
// }
console.log('\nUnfortunately we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear' + guest_list[i] + ',\n Yes you are still invited on tomorrow dinner. \n Thank You \n');
}
guest_list.splice(0, 2);
console.log(guest_list);
