//Local scope e.g: 1
function animals() {
    let myPet = "cat";
    console.log(`My pet is ${myPet}`);
}
animals();
// //Local scope e.g : 2
function operation(num1, num2) {
    let total = num1 + num2;
    console.log(total);
}
operation(6, 4);
// function animals (){
//   let pet_name = "Mano";
//  console.log(pet_name);
//  console.log(`My ${myPet} name is ${pet_name}`);   
// }
// animals();
// function operation (num : number) {
//     let b =9 * num;
//     console.log(b);
//     return b;
// }
// operation(3);
// //Global scope e.g: 1
let mypet = "dog";
function pets() {
    var pet2 = "parrot";
    console.log(`My pet is ${mypet}`);
}
pets();
// //Global scope e.g: 2
console.log(`My pet is ${mypet}`);
let a = 6;
let b = 9;
let c = b * a;
function operation() {
    console.log(c);
}
operation();
// let myPet = "cat";
// function animal (){
//   let pet_name = "Mano";
//  console.log(myPet); 
// }
// animal();
// //Global scope e.g: 2
let b = 9;
function multiple(num) {
    b *= num;
    console.log(b);
}
multiple(3);
//lexical Scope or Nested scope e.g: 1
function outer() {
    let username = "Maheen";
    function inner() {
        console.log(`Salam, ${username}`);
        function inner2() {
            console.log(`How are you ${username}?`);
        }
        inner2();
    }
    inner();
}
outer();
//lexical scope e.g 2
let a;
function greet(num = 3) {
    let a = 5;
    if (true) {
        let a = 9 * num;
        console.log(a); //27
    }
    console.log(a); //5
    return a;
}
greet();
export {};
// //lexical Scope or Nested scope e.g: 2
// function outer (){
//     let fullName = "Maheen Sheikh";
//     function inner(){
//         console.log(`Hello! ${fullName}`);
//     }
//     inner();
// }
// outer();
