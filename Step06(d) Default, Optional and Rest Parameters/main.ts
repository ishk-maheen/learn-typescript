//default perameter
function Game (name:string,username:string = "guest1234"){
    console.log(name , username);
    
}
Game("Maheen") //default perameter
Game("Abdullah","person1") //explict

//optional prameter
function multiplication(a:number, b:number, c?:number):number {
    if(typeof c !== "undefined"){
        return a*b*c;
    }
    return a*b;
}
console.log(multiplication(5,3,2));

//Rest parameter by function
function purse (color:string,...rest:string[]){
    console.log(color,rest);
}
purse("Brown","Perfume","Lipstick","Jewellery")

//Rest parameter by Arrow function
const schoolBag = (color:string,...rest:string[])=>{
    console.log(color,rest);
}
schoolBag("Grey","Books","Copies","Box","Water Bottle","Lunch Box")

//union type in functions 
let fruit = (name:undefined|string,quantity:number)=>{
    console.log(name,quantity);   
}
fruit(undefined,12)
fruit("Mango",12)