// Checking Usernames: Do the following to create a program that
// simulates how websites ensure that everyone has a unique username.
// 1.Make a list of five or more usernames called current users.
// 2.Make another list of five usernames called new users. Make sure
//   one or two of the new usernames are also in the current users list.
// 3.Loop through the new users list to see ifeach new username has already been used.
//    If it has, print a message that the person will need to enter a new username.
//    If a username has not been used,print a message saying that the username is available.
// 4.Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Hunain", "admin", "Ayan", "Shayan", "Ali"];
var new_users = ["Naba", "Marzia", "user7", "admin", "user9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
