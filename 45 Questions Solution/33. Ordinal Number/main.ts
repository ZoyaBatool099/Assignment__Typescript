// Ordinal Numbers: Ordinal numbers indicate thier position in a array,
// such as 1st or 2nd.Most ordinal numbers end in th, except 1, 2 and 3.
// 1. Store the numbers 1 through 9 in a array.

let myNumbers =[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

// 2. Loop through the array.

// for loop
for(let i = 0; i < myNumbers.length; i++){


// 3. Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a seperate line.

    // now we use conditions
    if(myNumbers[i] == 1){
        console.log(`${myNumbers[i]}st`);
    }else if(myNumbers[i] == 2){
        console.log(`${myNumbers[i]}nd`);
    }else if(myNumbers[i] == 3){
        console.log(`${myNumbers[i]}rd`);
    }else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
        console.log(`${myNumbers[i]}th`);
    }
}