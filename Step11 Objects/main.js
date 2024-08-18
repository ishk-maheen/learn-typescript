"use strict";
//Object
let students = {
    name: "Maheen",
    age: 19,
    isStudent: true,
};
console.log(students);
// Dot method
console.log(students.name);
console.log(students.age);
console.log(students.isStudent);
// Squrae-Bracket method
console.log(students["name"]);
console.log(students["age"]);
console.log(students["isStudent"]);
//nested object
//Object Oriented program mai this.name likhain gai
let student = {
    name: "maheen",
    age: 19,
    isStudent: true,
    greet: function () {
        console.log("Hello,my name is " + this.name);
    }
};
student.greet();
