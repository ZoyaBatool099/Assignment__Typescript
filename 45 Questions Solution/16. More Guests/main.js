var guest_list = [' Naba ', ' Ayan ', ' Hunain ', ' Shayan '];
// for (let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n\n We invite you on dinner tomorrow.\n Thank You \n');
// }
var not_present = 'Ayan';
var new_guest = 'Asif';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear' + guest_list[i] + ',\n We invite you on dinner tomorrow.\n Thank You \n');
}
// console.log(`Mr. ${ not_present} will not coming tomorrow dinner. `)
guest_list.unshift('Sadaf', 'Abiha', 'Nibah');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear' + guest_list[i] + ',\n We invite you on dinner tomorrow . we found big table so we decide to invite 3 more guests. \n Thank You \n');
}
