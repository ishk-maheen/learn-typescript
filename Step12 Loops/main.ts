//loops

//for
//basic structure
for (let i = 1; i < 10; i++) {
    console.log(i);  
}

//example
let names: string[] = ["Maheen", "Iqra", "Fatima", "Maham", "Esha"]
for (let a = 0; a < names.length; a++) {
    console.log(names[a].toUpperCase()); 
}

//while -> phely condition check karo phir code ko run karo
let b = 0;
while (b < 5) {
    console.log("Maheen");
    b++;  
}

//while infinite loop
// while (b < 5) {
//     console.log("Maheen");  
// }

//do-while -> phely code ko run karo phir condition check karo 
let c = 1;
do {
    console.log("Good Afternoon");
    c++;
} while (c <= 10);

//do-while infinite loop
// do {
//     console.log("Good Afternoon");
// } while (c <= 10);

//for-of
let name1: string[] = ["Maheen", "Iqra", "Fatima", "Maham", "Esha"]
for(let name of name1){
    console.log(name);  
}

let array = [10,20,30,40,50]
for(let elements of array){
    console.log(elements);  
}

//for-in -> print index of array

let name2: string[] = ["Maheen", "Iqra", "Fatima", "Maham", "Esha"]
for(let key in name2){
    console.log(key);  
}

let array1 = [10,20,30,40,50,60,70,80]
for(let elements in array1){
    console.log(elements);  
}

//for-in loop in objects
let person = {
    name: "Maheen",
    age: 19,
    city: "Karachi"
}

for (let thing in person) {
    console.log(thing);
}

//continue and break concepts
let studentsToLeave = ["Bilal", "Saad", "Abdullah", "Ali", "Fahad"] 
 for (let i = 0; i < studentsToLeave.length; i++) {
    if (studentsToLeave[i] == "Abdullah"){
        console.log("Abdullah Run");
         break;
        //continue
    }else{
        console.log(studentsToLeave[i]);
        console.log("Bye Bye");
    }
}
