// T-Shirt: Write a function called make shirt() that accepts a size and the text of a message that should
// be printed on the shirt. The function should printa sentence summarizing the size of a shirt and the message 
// printed on it. Call the function.
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "Code is life");
