// Animals: Think of at least three different animals that have a common characteristics.
//          Store the names of these animals in the list, and then use a for loop to print out
//          the name of each animal. Modify your program to print a statement about each animal,
//          such as A dog would make a great pet. Add a line at the end of your program starting
//          what these animals have in common.You could print a sentence such as Any of these animals
//          would make a great pet!

let animals: string [] = ["Cat" , "Dog" , "Rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would you make a great pet!");