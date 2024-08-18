"use strict";
//examples of call back synchronous function
//example 1
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
//example 2
function ParentFunction(cb) {
    console.log("I am parent function");
    cb();
}
function childFunction() {
    console.log("i am child function");
}
ParentFunction(childFunction);
//example 3
function userInput(cb) {
    let name = "Maheen";
    cb(name);
}
userInput(function (name) {
    console.log(`Hello ${name}`);
});
//asynchronous function -> delay -> Call Back queue
//example 1
console.log("one");
setTimeout(function () {
    console.log("This is an asynchronous function");
}, 2000);
console.log("two");
//example 2
console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
    console.log("I am settimeout");
}, 1500); //1000ms = 1s 
console.log(4);
function multiply() {
    return 5 * 5;
}
console.log(multiply());
//complex example 
function washing(callback) {
    console.log("Washing started");
    setTimeout(() => {
        console.log("Washing completed...");
        callback();
    }, 5000);
}
function soaking(callback) {
    console.log("Soaking started");
    setTimeout(() => {
        console.log("Soaking completed...");
        callback();
    }, 3000);
}
function drying() {
    console.log("Dry started");
    setTimeout(() => {
        console.log("Drying Completed...");
    }, 2000);
}
washing(() => {
    soaking(() => {
        drying();
    });
});
// call back hell
//promise -> 
//resolve -> .then
//reject -> .catch
//result -> .finally
let MakePromise = () => {
    return new Promise((resolve, reject) => {
        resolve("We win");
        //reject("We lost")
    });
};
MakePromise()
    .then((res) => {
    console.log("Resolved", res);
})
    .catch((err) => {
    console.log("Rejected", err);
})
    .finally(() => {
    console.log("Final Decision");
});
