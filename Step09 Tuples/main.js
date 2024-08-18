"use strict";
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
//simple example
let failingResponse = ["Not Found", 404];
console.log(failingResponse);
//example 1
let tuple = ["Maheen", "Sheikh", 24];
console.log(tuple);
tuple.push("April");
console.log(tuple);
let secondElement = tuple[1];
console.log(secondElement);
//example 2
const passingResponse = ["{}", 200];
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
//passingResponse[2];   // This means TypeScript will provide the correct types at the right index, and even raise an error if you try to access an object at an un-declared index.
