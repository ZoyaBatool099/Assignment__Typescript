// Write a function that stores information about a car in a object. The function should always
// receive a manufacturer and a model name . It should then accept an arbitrary  number of keyword
// arguments. Call the function with the required information and two other name-value pairs, such
// as a color or an optional feature. Print the object that's returnd to make sure all the information
// was stored correctly.


function make_car(manufacturer: string , model: string, ...options: [string, any] []): object {
    let car = { manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Lamborghini" , "Aventador" , ["Iconic color" , " Arancio Atlas (orange)"] , ["year" , 2011]))
console.log(make_car("Ford" , "Mustang" , ["Iconic color" , " Grabber Blue"] , ["year" , "2024"] , ["sunroof" , true]));

