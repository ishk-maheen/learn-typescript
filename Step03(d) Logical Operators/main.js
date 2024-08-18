"use strict";
//logical operator
/* logical AND */
let a = 5;
let b = 3;
//when both conditions are true answer will be true
let condition1 = a > b;
let condition2 = a >= 5;
console.log(condition1 && condition2);
//when one condition is true and other is false then answer will be false
let condition3 = a > b;
let condition4 = a === b;
console.log(condition3 && condition4);
//when both conditions are false answer will be false
let condition5 = a < b;
let condition6 = a === b;
console.log(condition5 && condition6);
/* logical OR */
let c = 6;
let d = 4;
//when both conditions are true answer will be true
let cond1 = c > d;
let cond2 = c >= 6;
console.log(cond1 || cond2);
//when one condition is true and other is false then answer will be true
let cond3 = c > d;
let cond4 = c === d;
console.log(cond3 || cond4);
//when both conditions are false answer will be false
let cond5 = c < d;
let cond6 = c === d;
console.log(cond5 || cond6);
/* logical NOT */
let e = 9;
let f = 7;
//when condition is true answer will be false
console.log(!(e > f));
//when condition is false answer will be true
console.log(!(e < f));
