// 18. Seeing the World: Think of at least five places in the world you would like to visit.
//     Store the locations in a array. Make sure the array is not in alphabetical order.
//     Print your array in its original order.

let places : string[] = ['Iran' , 'Sham' , 'Karbala' , 'Pakistan' , 'Najaf']
//console.log('original :' + places);

// Print your Array in alphabetical order without modifying the actual List.
//console.log('copy ' + [...places].sort());

// Show that your array is still in its original order by printing it.
//console.log('original :' + places);

// Print your array in reverse alphabetical order without changing the order  of the original List.
console.log('copy ' + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('original :' + places.sort());

// Reverse the order of your list again. Print the list to show its back to its original order.
console.log('original :' + places.sort().reverse())

