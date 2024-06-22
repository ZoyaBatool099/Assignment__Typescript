//Pizzas: Think of at least three kinds of your favorite pizza.Store the pizza
//names in a array, and than use a for loop to print the name of each pizza.

let mypizza : string [] = ["Cheeze pizza", "Pepperoni Pizza", "Vegeterian pizza"];

//Print only names of pizza
for (let i = 0; i < mypizza.length; i++){
    console.log(mypizza[i]);
}
// 1.Modify your for loop to print a sentence using the name of the pizza instead of printing
//   just the name of the pizza.For each pizza you should have one line of output containing a
//   simple statement like i like pepperoni pizza.

for (let i = 0; i < mypizza.length; i++) {
    console.log(`I like to eat ${mypizza[i]}`);
}
// 2.Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//   The output should consist of three or more lines about the kind of pizza you like and then an
//   additional sentence, such as i really love pizza!

console.log(
    `\nI really like to eat Pizzas. Pizza comes in a variety of flavors and toopings,
       allowing individuals to customize it to their liking`
);


