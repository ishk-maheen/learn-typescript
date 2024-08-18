"use strict";
//union literals
let pasword = false;
function createID(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
createID("Maheen");
createID(19);
function printValues(value) {
    console.log("The value of x is " + value.x);
    console.log("The value of y is " + value.y);
}
printValues({ x: 20, y: 40 });
