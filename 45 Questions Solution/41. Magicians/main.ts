// Magicians: Make a array of magician's names.Pass the array to a function called show_magicians(),
// which print the name of each magician in the array.

let Magicians : string [] = ["David Copperfield" , "Penn & Teller" , "Derren Brown"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(Magicians);