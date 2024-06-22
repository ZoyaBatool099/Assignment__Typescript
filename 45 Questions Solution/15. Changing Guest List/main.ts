let guest_list : string [] = [' Naba ',' Ayan ',' Hunain ',' Shayan '];
for (let i=0; i<guest_list.length; i++){
    console.log('Dear' + guest_list[i] + ',\n\n We invite you on dinner tomorrow.\n Thank You \n');
}
let not_present : string = 'Ayan';
let new_guest : string = 'Asif';
guest_list[3] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Dear' + guest_list[i] + ',\n We invite you on dinner tomorrow.\n Thank You \n');
}
console.log(`Mr. ${ not_present} will not coming tomorrow dinner. `)
             