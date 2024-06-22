var guest_list = [' Naba ', ' Ayan ', ' Hunain ', ' Shayan '];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear' + guest_list[i] + ',\n\n We invite you on dinner tomorrow.\n Thank You \n');
}
var not_present = 'Ayan';
var new_guest = 'Asif';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear' + guest_list[i] + ',\n We invite you on dinner tomorrow.\n Thank You \n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner. "));
