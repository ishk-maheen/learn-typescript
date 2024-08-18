"use strict";
// //object 
// let student:{
//     name:string,
//     class:number
// } = {
//     name: "Maheen Sheikh",
//     class: "13"
// }
let employee = [
    {
        name: "Maheen",
        age: 19,
        salary: 10000,
    },
    {
        name: "Ahmed",
        age: 27,
        salary: 20000,
    },
    {
        name: "Ali",
        age: 30,
        salary: 30000,
    }
];
console.log(employee.filter(data => data.name === "Ali"));
console.log(employee.filter(data => data.salary > 10000));
