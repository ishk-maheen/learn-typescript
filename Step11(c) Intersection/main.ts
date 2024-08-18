//intersection
interface student1 {
    name:string,
}

interface student2 {
    age:number,
}

type student3 = student1 & student2;

let students:student3 = {
    name:"Maheen",
    age:19,
}
console.log(students);