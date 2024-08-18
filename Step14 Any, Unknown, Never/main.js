"use strict";
//union literals
function printID(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printID("maheen");
printID(19);
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
print({ a: 100, b: 200 });
function print(pt) {
    console.log("The coordinate's a value is " + pt.a);
    console.log("The coordinate's b value is " + pt.b);
}
print({ a: 4, b: 24 });
//type any ->value save nhi hoti
let xyz = 1;
xyz = "Sheikh";
xyz = true;
//xyz.toUpperCase(); //give error because their are different types and uppe case only apply to string values
// so we can use if-else statement
if (typeof xyz === "string") {
    console.log(xyz.toUpperCase());
}
//type unknown
let abc = 1;
abc = "Maheen";
abc = true;
//abc.toUpperCase();  //give error because their are different types and uppe case only apply to string values
// so we can use if-else statement
if (typeof abc === "string") {
    console.log(abc.toUpperCase());
}
//never
let color = "blue";
switch (color) {
    case "Green":
        console.log("Green!!!");
        break;
    case "Pink":
        console.log("Pink!!!");
        break;
    default:
        Error(color);
        break;
}
//casting 
let m = "Hello";
console.log(m.length);
//console.log((m as string).toUpperCase);
let n = 42;
console.log(n.length); //undefine beause number mai lenght nhi hoti
