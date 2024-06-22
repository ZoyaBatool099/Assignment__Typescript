// Unchanged Magicians: Start with your work from Exercies 40. Call the function make_great()
// with the copy of the array of magician's names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array
// to show that you have one array of the original names and one arraywith the great added to
// each magician's name.
var Magicians = ["Dynamo", "David Blaine", "Criss Angel"];
function make_great(Magicians) {
    var greatMagicians = [];
    Magicians.forEach(function (Magician) {
        greatMagicians.push("".concat(Magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(Magicians.slice());
console.log("Original magicians:");
show_magicians(Magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
