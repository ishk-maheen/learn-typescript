"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = exports.username = void 0;
//example 1
function username(firstname, secondname) {
    return firstname + " " + secondname;
}
exports.username = username;
//example 2
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
function subtract(num1, num2) {
    return num1 - num2;
}
exports.subtract = subtract;
function multiply(num1, num2) {
    return num1 * num2;
}
exports.multiply = multiply;
function divide(num1, num2) {
    return num1 / num2;
}
exports.divide = divide;
