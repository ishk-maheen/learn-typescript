//Arrow functions

//example 1
let add1 = (x: number, y: number)=>x+y;
console.log(add1(4,6));

//example 2
const country1 =()=>{
    console.log("Pakistan");
}
let ans1 = country1()
console.log(ans1);

//return function
//example 3 
const Country =()=>{
    return "USA"
}
console.log(Country());

//example 4
const country =()=>{
    console.log("Pakistan");
    return "USA"
}
let ans = country()
console.log(ans);

//method function
let calculator ={
    add: (a: number, b: number) =>{
        return a + b;
    },
    subtract: (a: number, b: number) =>{
        return a - b;
    },
    multiply: (a: number, b: number) =>{
        return a * b;
    },
    divide: (a: number, b: number) =>{
        return a / b;
    }
}
console.log(calculator.add (6,12));
console.log(calculator.subtract (24,12));
console.log(calculator.multiply (6,3));
console.log(calculator.divide (36,12));

//synchronous function
console.log(1);
console.log(2);
console.log(3);
console.log(4);
function add() {
    return 5+5;
}
console.log(add());

//asynchronous function 
async function greet(){
    return "hello world";
}
async function printgreed(){ 
    let message = await greet()
    console.log(message);   
}

