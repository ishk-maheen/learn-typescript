//combination operator
var a = 2 - 4 + (6 - 5);
// 2 - 4 + 1
// 2 -3
//-1
console.log(a);
var b = (2 + 5 * (4 - 7) / 2) - (2 - 3 * (4 * 5) / 1);
//  (2 + 5 * (-3)/2)  - (2 - 3 * 20/1)
//  (2 + 5 *-1.5)     - (2 - 3 *20)
//  (2 - 7.5)         - (2 - 60)
//  (-5.5)            - (-58)
//  -5.5               + 58
//  52.5
console.log(b);
//You have to make a Typescript code that will solve the following mathematical expression.
//(x + y * z) / (w - 1) - (y - w * x) * x + z / w
var x = 1;
var y = 2;
var z = 3;
var w = 4;
console.log((x + y * z) / (w - 1) - (y - w * x) * x + z / w);
