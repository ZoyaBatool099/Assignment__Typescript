let car: string = 'subaru';
let age: number = 25;
let numbers: number[]= [1 , 2 , 3 , 4];


// String tests

// Test 1: Equality (true)
console.log("Is car == 'subaru'? I predict false");
console.log(car == 'subaru'); //true (case-insensitive)

// Test 2: Strict equality (false)
console.log("Is car === 'subaru'? I predict false");
console.log(car === 'subaru'); //false (case-sensitive)

// Test 3: Inquality (true)
console.log("Is car != 'subaru'? I predict false");
console.log(car != 'subaru'); //true

// Test 4: Strict equality (false)
console.log("Is car !== 'subaru'? I predict false");
console.log(car !== 'subaru'); //false (case-sensetive)





//lower function tests

//Test 5: Lowercase conversion (true)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'suburu'); //true (converted to lowercase)

//Test 6: Lowercase conversion (false)
console.log("Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase()); //false (original values remains uppercase)

// Numerical Tests

// Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); //True

// Test 8: Inequality (false)
console.log("Is age != 30?  I predict True.");
console.log(age != 30); //True

// Test 9: Greater than (false)
console.log("Is age > 30?  I predict false.");
console.log(age > 30); //false

// Test 10: Less than or equal (True)
console.log("Is age <= 25?  I predict True.");
console.log(age <= 25); //True


// Logical Operators

// Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); //True (both conditions met)

// Test 12: OR (True)
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); //false (neither condition met)

//Array Tests

//Test 13: In Array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers); //True (checks for index existence)

//Test 14: Not in Array (false)
console.log("Is 5 not in numbers? I predict false.");
console.log(5 not in numbers); //false (negation of "in" operator)



