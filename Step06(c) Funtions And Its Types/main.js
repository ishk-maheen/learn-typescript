"use strict";
//arrow function
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//method function
let calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        return a / b;
    }
};
console.log(calculator.add(6, 12));
console.log(calculator.subtract(24, 12));
console.log(calculator.multiply(6, 3));
console.log(calculator.divide(36, 12));
//asynchronous function //controls input and output
function greet() {
    return __awaiter(this, void 0, void 0, function* () {
        return "hello world";
    });
}
function printgreed() {
    return __awaiter(this, void 0, void 0, function* () {
        let message = yield greet();
        console.log(message);
    });
}
