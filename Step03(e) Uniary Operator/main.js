"use strict";
//uniary operator
let num1 = 6;
//post-increment
console.log(num1++);
//pre-increment
console.log(++num1);
/*<-------------------->*/
let num2 = 7;
//post-decrement
console.log(num2--);
//pre-decrement
console.log(--num2);
//uniary operator tricky question
let a = 5;
let b = 2;
let c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c); //22
let x = 2;
let y = 3;
let z = 4;
let p = x++ + y + ++x + y++ + ++z + x + z;
console.log(p); //26
let q = y++ + x + ++z + z++ + ++y + y + x;
console.log(q); //36
