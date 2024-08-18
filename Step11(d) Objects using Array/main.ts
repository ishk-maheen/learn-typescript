//array in object

//example 1
type Person = {
    name:string,
    age:number,
    salary:number,
}

let employee:Person[] =[
{
    name:"Maheen",
    age:19,
    salary:50000,
},
{
    name:"Ahmed",
    age:27,
    salary:60000,
},
{
    name:"Ali",
    age:30,
    salary:80000,
}
]
console.log(employee.filter(data=>data.name === "Ali"));
console.log(employee.filter(data=>data.salary>10000));

//example 2
let user =[
    {
        name: "Abdullah",
        age: 21,
        gender: "male"
    },
    {
        name: "Zunaira",
        age: 15,
        gender: "female"
    }
]
console.log(user);
console.log(user[0]);
console.log(user[1]);

console.log(user[0].name);
console.log(user[0].age);
console.log(user[0].gender);

console.log(user[1].name);
console.log(user[1].age);
console.log(user[1].gender);

//nested objects using arrays
let students = [
    {
        name: "Maheen",
        age: 19,
        gender: "female",
        courses:{
            subject: "Maths",
            grade: "A-one"
        }
    },
    {
        name: "Hassan",
        age: 14,
        gender: "female",
        courses:{
            subject: "English",
            grade: "A"
        }
    }
]
console.log(students[0].courses.grade);
console.log(students[1]["courses"]["grade"]);
