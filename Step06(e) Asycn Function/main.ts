//call back in synchronous function
//synchronous function -> no delay, line-wise execution -> Call Stalk

//example 1
//higher order function
function One (callback: () => void) {
    console.log("Maheen");
    callback()
}
//Call Back function
const Two =() => {
    console.log("Sheikh");   
}
One(Two)

//example 2
function ParentFunction(cb:() => void){
    console.log("I am parent function");
    cb()
}
function childFunction (){
    console.log("i am child function");
}
ParentFunction(childFunction)

//example 3
function userInput(cb:any){
    let name = "Maheen"
    cb(name);
}
userInput(function(name:string){
    console.log(`Hello ${name}`);
    
})

//example 4
function myCallBack(text: string) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText: string, callback: (text: string) => void)
{
    callback(initialText);
}
callingFunction("myText", myCallBack);

//example 5
function myFunc(cb:() => void){
    cb()
}
function mycall(){
    console.log("This is a callback function");
}
myFunc(mycall)

//call back in asynchronous function
//asynchronous function -> delay -> Call Back queue

//example 1
console.log("one");

setTimeout(function(){
    console.log("This is an asynchronous function");
},2000)

console.log("two");

//example 2
console.log(1);
console.log(2);
console.log(3);

setTimeout(()=>{
    console.log("I am settimeout");
    
},1500) //1000ms = 1s 

console.log(4);
function multiply() {
    return 5*5;
}
console.log(multiply());

//example 3
function greet(name:string, cb:() => void){
    console.log(`Hello ${name}`);
    setTimeout(() => {
        console.log("i am callback");
        cb();
    }, 2000);
    console.log("abc");
    
}

greet("Maheen", function(){
    console.log("How are you");
});

//complex example 
function washing(callback:()=>void){
    console.log("Washing started");
    setTimeout(()=>{
        console.log("Washing completed...");
        callback();
    },5000)
    
}
function soaking(callback:()=>void){
    console.log("Soaking started");
    setTimeout(()=>{
        console.log("Soaking completed...");
        callback();
    },3000)
}

function drying(){
    console.log("Dry started");
    setTimeout(() => {
        console.log("Drying Completed...");
    },2000);
}

washing(()=>{
    soaking(()=>{
        drying()
    })
})

// call back hell

//promise -> 
//resolve -> .then
//reject -> .catch
//result -> .finally

let MakePromise = () => {
    return new Promise((resolve,reject)=>{
        resolve("We win")
        //reject("We lost")
    })
}
MakePromise()
.then((res)=>{
    console.log("Resolved", res);
})
.catch((err)=>{
    console.log("Rejected", err);
    
})
.finally(()=>{
    console.log("Final Decision: Go back to home"); 
})