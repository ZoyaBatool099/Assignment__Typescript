// 30.Hello Admin: Make a array of five or more usernames,including the name 'admin'.
//    Imagine you are writing code that will print a greeting to each user after they
//    log in to a website.Loop thought the array,and print a greeting to each user:
var users = ["Taha", "Hassan", "Hussain", "Ali", "admin"];
// 1.If the username is 'admin',print a special greeting ,such as Hello admin,
//   would you like to see a status report?
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    // 2.Otherwise, print a generic greeting, such as Hello Eric, Thank you for logging in again.
    else {
        console.log("Hello ".concat(user, ", Thank you for logging in again."));
    }
}
