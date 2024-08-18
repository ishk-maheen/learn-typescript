"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_js_1 = __importDefault(require("./first.js"));
const second_js_1 = __importDefault(require("./second.js"));
let sum = first_js_1.default + second_js_1.default;
console.log(sum);
