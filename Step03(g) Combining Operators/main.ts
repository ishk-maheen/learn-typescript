//combination operator
//example 1
let a = 2 - 4 + (6-5)
      // 2 - 4 + 1
      // 2 -3
      //-1
console.log(a);

//example 2
let b = (2 + 5 * (4-7)/2) - (2 - 3 * (4*5)/1)
    //  (2 + 5 * (-3)/2)  - (2 - 3 * 20/1)
    //  (2 + 5 *-1.5)     - (2 - 3 *20)
    //  (2 - 7.5)         - (2 - 60)
    //  (-5.5)            - (-58)
    //  -5.5               + 58
    //  52.5
console.log(b);

//example 3
//You have to make a Typescript code that will solve the following mathematical expression.
//(x + y * z) / (w - 1) - (y - w * x) * x + z / w
let x = 1;
let y = 2;
let z = 3;
let w = 4;

console.log((x + y * z) / (w - 1) - (y - w * x) * x + z / w);
