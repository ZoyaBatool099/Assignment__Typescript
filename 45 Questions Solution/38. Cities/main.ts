// Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for
// the country a default value.Call ypu function for three different cities, at least one of which is
// not in the default country. 

function discribe_city(city: string , country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
};

// 3 cities

let city1 = discribe_city("Cape town" , "South africa");
let city2 = discribe_city("Karachi");
let city3 = discribe_city("Islamabad");
let city4 = discribe_city("Peshawar");