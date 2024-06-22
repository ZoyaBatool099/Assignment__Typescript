// Album: Write a function called make_album() that builds a object describing a music album.
// The function should take in an artist name and an album title, and it should return a object
// containing these two pieces of information. Use the function to make three dictionaries representing
// different albums. Print each return value to show that objects are storing the album information correctly.
// Add an optional parameter to make_album() that allow you to store the number of tracks on an album. If the
// calling line includes a value for the number of tracks , add that value to the album's object. Make at least
// one new function call that includes the number of tracks on an album.

function make_Album1(artistname: string , albumTitle: string) {
    return {artistname , albumTitle}
}

let album1 = make_Album1("Ali" , "Rang-e-Mohabat");
let album2 = make_Album1("Ahad" , "Roshan Andhera");
let album3 = make_Album1("Aziz" , "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);


// Number of tracks
function make_Album2(artistname: string , albumTitle: string , numberofTracks?: number) {
    return {artistname , albumTitle , numberofTracks}
}

let album4 = make_Album2("Ali" , "dil dil pakistan" , 25);
let album5 = make_Album2("Ali Zafar" , "Masty" , 65);
let album6 = make_Album2("Atif Aslam" , "Meri Kahani");

console.log(album4);
console.log(album5);
console.log(album6);


