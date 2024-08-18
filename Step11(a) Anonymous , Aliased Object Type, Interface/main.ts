//Type Anonymous
//example 1
let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

//example 2
let car : {
    Brand: string;
    model: number;
    color: string;
} = {
    Brand: "Toyota",
    model: 22,
    color: "Black"
}
console.log(car.model);

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

//Aliases Type Object Optional Values
type student = {
    name:string,
    age:number,
    isStudent?:boolean,
    gender:string,
}
let student1:student = {
    name: "Kiran",
    age: 22,
    gender:"Female",
}
console.log(student1);

console.log(student1.name);
console.log(student1["age"]);
console.log(student1["gender"]);

// Interfaces
//example 1
interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}
console.log(storeManager.name);

//example 2
interface User{
    name: string;
    age: number;
    isStudent: boolean;
}
let user1 : User ={
    name: "Abdullah",
    age: 21,
    isStudent: true,
}
console.log(user1["name"]);

