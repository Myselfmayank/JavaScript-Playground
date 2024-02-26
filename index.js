/*
Const Keyword -> We can not reAssign any value to vairbale declared using Const Keyword.

But Array with const keyword can be changed

const sandwich = ["peanut butter", "jelly", 1, true]; //allowed
sandwich[4] = "Abc";

*/

// FYI - Undefined and not defined are two different things

var a = 5;
var b = 2;

const sandwich = ["peanut butter", "jelly", 1, true];

sandwich[4] = "Abc";
sandwich.push(4.53) // push is used to insert new values to array

const oneDown = sandwich.pop(); //removes lat element and returns the removed element

const removedFromOurArray = sandwich.shift(); // removes the first element from array and returns it

//unshift adds element to the first index in array

console.log(oneDown); // prints 4.53
console.log(removedFromOurArray); // prints -> peanut butter

var str = "Mayank";
function sum(a) {
    a = 10;
    temp = 3; // accessible outside but can not use this to assign it's value to different variable
}

sum(2);
console.log(sandwich);