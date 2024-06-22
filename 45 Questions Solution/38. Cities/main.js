// Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for
// the country a default value.Call ypu function for three different cities, at least one of which is
// not in the default country. 
function discribe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
;
// 3 cities
var city1 = discribe_city("Cape town", "South africa");
var city2 = discribe_city("Karachi");
var city3 = discribe_city("Islamabad");
var city4 = discribe_city("Peshawar");
