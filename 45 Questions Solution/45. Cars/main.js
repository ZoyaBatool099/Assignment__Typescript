// Write a function that stores information about a car in a object. The function should always
// receive a manufacturer and a model name . It should then accept an arbitrary  number of keyword
// arguments. Call the function with the required information and two other name-value pairs, such
// as a color or an optional feature. Print the object that's returnd to make sure all the information
// was stored correctly.
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Lamborghini", "Aventador", ["Iconic color", " Arancio Atlas (orange)"], ["year", 2011]));
console.log(make_car("Ford", "Mustang", ["Iconic color", " Grabber Blue"], ["year", "2024"], ["sunroof", true]));
