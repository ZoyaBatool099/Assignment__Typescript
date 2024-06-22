// Stage of life: Write an if-else chain that determines a
//persons stage of life. Set a value for the variable age,and then:
// 1.If the person is less than 2 years old,print a message
//   that the person is a baby.

let age: number = 85;
if(age<2){
    console.log("The person is a baby.")
}


// 2.If the person is at least 2 years old but less than 4,print a message
//   that the person is a toddler.

else if(age>= 2 && age < 4){
    console.log("The person is a toddler.");
}

// 3.If the person is at least 4 years old but less than 13,print a message
//   that the person is a kid.

else if(age>= 4 && age < 13){
    console.log("The person is a kid.");
}

// 4.If the person is at least 13 years old but less than 20,print a message
//   that the person is a teenager.

else if(age>= 13 && age < 20){
    console.log("The person is a teenager.");
}


// 5.If the person is at least 20 years old but less than 65,print a message
//   that the person is an adult.

else if(age>= 20 && age < 65){
    console.log("The person is a adult.");
}

// 6.If the person is age 65 or older,print a message that the person is an elder.
else{
    console.log("The person is an elder.")
}