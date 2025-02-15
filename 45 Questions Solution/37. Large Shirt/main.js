// Large Shirts: Modify the make shirt() function so that the shirts are large by default with a message
// that reads I Love Typescript. Make a large shirt and a medium shirt with the default message, and a
// shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printing on it. "));
}
make_shirt(); //Default large and message 
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
