// Lowercase //
let personName: string ="Sir Hamzah"
console.log("Lowercase:", personName.toLowerCase());


// Uppercase //
console.log("Uppercase:", personName.toLocaleUpperCase());


// Titlecase //
console.log("Titlecase:", personName.replace(/\bw/g,c=> c.toUpperCase()));