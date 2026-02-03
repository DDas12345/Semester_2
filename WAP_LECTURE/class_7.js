// Class_6 and Class_7

// Snippet 1
const names = ["Alice", "Bob", "Charlie"];
// for (const name of names) {
//     console.log(`Welcome ${name}`);
// }

// Snippet 2
const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//     console.log(num * 2);
// }

function processData (arr, callback) {
    // Process names
    for (let value of arr) {
        callback(value);
    }
}

function welcomeNames(name) {
    console.log(`Welcome ${name}`);
}

function numbersLogic(num) {
    console.log(num * 2);
}

// processData(names, welcomeNames);
// processData(numbers, numbersLogic);

function calculate(){
    return function(){
        console.log("Welcome to the class");
    }
}

let final = calculate();
console.log(final());



