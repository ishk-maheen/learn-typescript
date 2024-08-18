"use strict";
function Greeting(name) {
    //template literals
    console.log(`Good Afternoon ${name}`);
    //concatination  
    console.log("Good Afternoon " + name);
}
Greeting("Maheen Sheikh");
//name, timing, course name , email
function UserInfo(name, timings, coursename, email) {
    console.log(`Name: ${name}`);
    console.log(`Timing: ${timings}`);
    console.log(`Course Name: ${coursename}`);
    console.log(`Email: ${email}`);
}
UserInfo("Maheen Sheikh", "2pm to 5pm", "TypeScript", "maheenrashidsheikh786@gmail.com");
//default perameter
function Game(name, username = "guest1234") {
    console.log(name, username);
}
Game("Maheen"); //default perameter
Game("Abdullah", "person1"); //explict
//optional prameter
function multiplication(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
console.log(multiplication(5, 3, 2));
//Rest parameter by function
function purse(color, ...rest) {
    console.log(color, rest);
}
purse("Brown", "Perfume", "Lipstick", "Jewellery");
//Arrow function
const schoolBag = (color, ...rest) => {
    console.log(color, rest);
};
schoolBag("Grey", "Books", "Copies", "Box", "Water Bottle", "Lunch Box");
//union type
let fruit = (name, quantity) => {
    console.log(name, quantity);
};
fruit(undefined, 12);
fruit("Mango", 12);
//return function
const country = () => {
    console.log("Pakistan");
    return "USA";
};
let ans = country();
console.log(ans);
//without return
const country1 = () => {
    console.log("Pakistan");
};
let ans1 = country1();
console.log(ans1);
//only return
const Country = () => {
    return "USA";
};
console.log(Country());
//synchronous function -> no delay,sequence wise -> Call Stack
console.log(1);
console.log(2);
console.log(3);
console.log(4);
function add() {
    return 5 + 5;
}
console.log(add());
//asynchronous function -> delay, parallel execution -> Call Back queue
console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
    console.log("I am settimeout");
}, 1500);
//1000ms = 1s
//1500ms = 1.5s
console.log(4);
function multiply() {
    return 5 * 5;
}
console.log(multiply());
//higher order function
function One(callback) {
    console.log("Maheen");
    callback();
}
//Call Back function
const Two = () => {
    console.log("Sheikh");
};
One(Two);
// call back hell
//promise -> 
//resolve -> .then
//reject -> .catch
//result -> .finally
let MakePromise = () => {
    return new Promise((resolve, reject) => {
        resolve("I am resolved");
        reject("You are rejected");
    });
};
MakePromise()
    .then((res) => {
    console.log("Then", res);
})
    .catch((err) => {
    console.log("Catch", err);
});
/**************************************/
//explicit casting
//Casting with as
let x = 'hello';
console.log(x.length); //Output:5
//Casting with <>()
let y = 'typescript';
console.log(y.length); //Output:10
//Casting with Type Assertion
let z = 'javascript';
console.log(z.length); //Output:10
//Type Assertion with Function
function getLength(input) {
    return input.length || input.toString().length;
}
console.log(getLength(28)); //Output: 2
//Type Assertion with Array
let arr = ['ali', 'bilal', 'salman'];
console.log(arr.map(x => x.toUpperCase())); //Output: ['ALI', 'BILAL', 'SALMAN']
