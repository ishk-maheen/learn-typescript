//nested object
//Object Oriented program mai this.name likhain gai

//example 1
let student = {
    name:"maheen",
    age:19,
    isStudent: true,
    greet: function () {
        console.log("Hello,my name is " + this.name);  
    }
}
student.greet()    

//example 2
let object = {
    name: "Maheen",
    age: 19,
    gender: "female",
    favouriteColor: {
      color: "blue",
      number: 24
    }
 }
 console.log(object.gender);
 console.log(object.favouriteColor.color);

//example 3
let student2 = {
    name: "Maheen Sheikh",
    gender:"Female",
    favourite: {
        food: "Pizza",
        drink: "Coke",
        colour: "Black",
    },
    details: function() {
        console.log("My favourite food is " + this.favourite.food); 
        console.log("My favourite food is " + this["favourite"]["food"]);   
    }
}
student2.details();


console.log("My favourite food is"+ student2.favourite.food);

console.log(student2.favourite.food); //pizza
console.log(student2.favourite.drink); //coke
console.log(student2.favourite.colour); //black
console.log(student2["favourite"]["food"]);
console.log(student2["favourite"]["drink"]);
console.log(student2["favourite"]["colour"]);

//example 4
type Author ={
    firstName: string,
    lastName:string,
}
type Book = {
    author: Author,
    name: string,
}

let myBook :Book = {
    author:{
        firstName:"Maheen",
        lastName:"Sheikh",
    },
    name: "TypeScript Ki Duniya"
}
console.log(myBook);

//example 5
//we write key with space in " "
//concept of this.
let person = {
    "full name": "John",
    age:30,
    gender:"Male",
    favourite:{
        food:"Pizza",
        drink: "colddrink",
        colour: {
            hair: "black",
            eyes: "blue",
            details:function(){
                console.log("My hair colour is "+ this.hair);   
            },
        }
    }
}
person.favourite.colour.details();
console.log(person["full name"]);