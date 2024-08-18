//union literals -> narrowing type

let student : string | number = 123;
student = "giaic";

//example 1
let password: string | number | boolean = false;

function createID(id:string| number) {
    if(typeof id === "string"){
        console.log(id.toUpperCase());
        
    }else {
        console.log(id);
        
    }
}
createID("Maheen");
createID(19);

//example 2 
type studentType = string | number;

let studentID : studentType = 12345;

studentID = "giaic";

function testingNarrowing (parameters: string | number){
     if(typeof parameters === "number"){
        return Math.round(parameters)
     }else{
        return parameters.toUpperCase();
     }
}
console.log(testingNarrowing(123.45)); // Output: 123
console.log(testingNarrowing("Maheen Sheikh")); // Output: MAHEEN SHEIKH

//example 3 
type TeacherNametype= "Hina" | "Anas" | "Hunain" | "Ahmed" | 2;
let teacherName : TeacherNametype = "Hina";
if(typeof teacherName === "string"){

    if (teacherName == "Hina"){
        console.log("Hina is a teacher");
    }else if (teacherName === "Anas"){
        console.log("Anas is a teacher");
    }

}else {
    console.log("This is number");
    
}