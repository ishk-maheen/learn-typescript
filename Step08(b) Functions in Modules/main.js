"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//example 1
const mymain_js_1 = require("./mymain.js");
let fullName = (0, mymain_js_1.username)("Maheen", "Sheikh");
console.log("Full Name:", fullName);
//example 2
const mymain_js_2 = require("./mymain.js");
let result1 = (0, mymain_js_2.add)(6, 3);
let result2 = (0, mymain_js_2.subtract)(6, 3);
let result3 = (0, mymain_js_2.multiply)(6, 3);
let result4 = (0, mymain_js_2.divide)(6, 3);
console.log("Addition:", result1);
console.log("Subtraction:", result2);
console.log("Multiplication:", result3);
console.log("Division:", result4);
