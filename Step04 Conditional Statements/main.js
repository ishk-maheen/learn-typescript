"use strict";
//conditional statements
// if statement
let isRain = true;
if (isRain) {
    console.log("Take umbrella");
}
;
if (!(isRain)) {
    console.log("Do not take umbrella");
}
//if else statement
let age = 18;
if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("you can not vote");
}
//else-if statement
let percentage = 79;
if (percentage >= 80) {
    console.log("your grade is A+");
}
else if (percentage >= 70) {
    console.log("your grade is A");
}
else if (percentage >= 60) {
    console.log("your grade is B");
}
else if (percentage >= 50) {
    console.log("your grade is C");
}
else if (percentage >= 40) {
    console.log("your grade is D");
}
else if (percentage >= 30) {
    console.log("your grade is E ");
}
else {
    console.log("you are fail");
}
