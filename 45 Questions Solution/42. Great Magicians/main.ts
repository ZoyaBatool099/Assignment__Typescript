// Great Magicians: Start with a copy of your program from Exrecise 39. Write a function
// called make_great() that modifies by adding  the phrase the great to each magician's name.
// Call show_magicians() to see that the list has actually been modified.

let Magicians: string [] = ["Dynamo" , "David Blaine" , "Criss Angel"];

function show_Magicians(Magicians: string[]) {
    Magicians.forEach((Magicians) => {
        console.log(Magicians);
    });
}


function make_great(Magicians: string []) {
for (let i = 0; i < Magicians.length; i++) {
    Magicians[i] = Magicians[i] + "The Great";
}
}

make_great(Magicians); //Modifies the original array
show_Magicians(Magicians); //Show modified names 