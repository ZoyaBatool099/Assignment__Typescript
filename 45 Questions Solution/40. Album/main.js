function make_Album1(artistname, albumTitle) {
    return { artistname: artistname, albumTitle: albumTitle };
}
var album1 = make_Album1("Ali", "Rang-e-Mohabat");
var album2 = make_Album1("Ahad", "Roshan Andhera");
var album3 = make_Album1("Aziz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
// Number of tracks
function make_Album2(artistname, albumTitle, numberofTracks) {
    return { artistname: artistname, albumTitle: albumTitle, numberofTracks: numberofTracks };
}
var album4 = make_Album2("Ali", "dil dil pakistan", 25);
var album5 = make_Album2("Ali Zafar", "Masty", 65);
var album6 = make_Album2("Atif Aslam", "Meri Kahani");
console.log(album4);
console.log(album5);
console.log(album6);
