// Lowercase //
var personName = "Sir Hamzah";
console.log("Lowercase:", personName.toLowerCase());
// Uppercase //
console.log("Uppercase:", personName.toLocaleUpperCase());
// Titlecase //
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
