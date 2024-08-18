//array in objects
var user = [
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
];
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
var students = [
    {
        name: "Maheen",
        age: 19,
        gender: "female",
        courses: {
            subject: "Maths",
            grade: "A-one"
        }
    },
    {
        name: "Hassan",
        age: 14,
        gender: "female",
        courses: {
            subject: "English",
            grade: "A"
        }
    }
];
console.log(students[0].courses.grade);
console.log(students[1]["courses"]["grade"]);
var user1 = {
    name: "Abdullah",
    age: 21,
    isStudent: true,
};
console.log(user1["name"]);
//type anonymous
var car = {
    Brand: "Toyota",
    model: 22,
    color: "Black"
};
console.log(car.model);
var myBook1 = {
    name: "The Great Gatsby",
    author: {
        name: "F.scott",
        birthYear: 1896,
    }
};
console.log(myBook1);
