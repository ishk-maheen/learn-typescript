"use strict";
//ternary operator
//example1
let isTired = true;
let body = isTired ? "sleep" : "do work";
console.log(`You can ${body}`);
//example 2
let ishungry = true;
let food = ishungry ? "Eat Apple" : "Drink Water";
console.log(food);
//example 3
let userName = "Maheen Sheikh";
let names = (userName === "Maheen Sheikh") ? "You are login" : "Invalid userName";
console.log(names);
//Nested-Ternary Operator
//example1
let temperature = 32;
let weather = (temperature >= 40) ? "It's a very hot day" : (temperature >= 30) ? "It's a hot day" : (temperature >= 20) ? "It's a warm day" : "It's a cold day";
//example 2
let percentage = 8;
let result = (percentage >= 90) ? "A++" : (percentage >= 80) ? "A+" : (percentage >= 70) ? "A" : (percentage >= 60) ? "B" : (percentage >= 50) ? "C" : (percentage >= 40) ? "D" : (percentage >= 30) ? "E" : "F";
console.log("Grade =", result);
//example 3 
let weekDays = "Sunday";
let work = (weekDays === "Monday") ? "Full Day Work" : (weekDays === "Tuesday") ? "Full Day Work" : (weekDays === "Wednesday") ? "Full Day Work" : (weekDays === "Thursday") ? "Full Day Work" : (weekDays === "Friday") ? "Half Day Work" : "It's weekend go to picnic";
console.log(work);
