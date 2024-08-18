//basic function
function greet() {
    console.log("hello world"); 
    console.log("How are you?");
    console.log("What are you doing?");
    console.log("Which class you are in?");     
}
greet()

//parameters=>arguments

//example 1 Greeting function
function Greeting (name: string){
    //template literals
    console.log(`Good Afternoon ${name}`);
    //concatination  
    console.log("Good Afternoon " + name);
    
}
Greeting("Maheen Sheikh")

//example 2 giving parameters (name, timing, course name , email)
function UserInfo(name:string,timings:string,coursename:string,email:string) {
    console.log(`Name: ${name}`);
    console.log(`Timing: ${timings}`);
    console.log(`Course Name: ${coursename}`);
    console.log(`Email: ${email}`);
 }
 UserInfo("Maheen Sheikh","2pm to 5pm","TypeScript","maheen@gmail.com")

//example 3 calculate sum, difference, product, and divide
function allNumber(num1 :number, num2 :number) {
    const sum = num1 + num2;
    console.log("Sum:", sum);
    const difference = num1 - num2;
    console.log("Difference:", difference);
    const product = num1 * num2;
    console.log("Product:", product);
    const divide = num1 / num2;
    console.log("Divide:", divide);
}
allNumber(5, 3);

//example 4 generate table
function generateTable(num:number) {
    console.log(num+" x 1 = "+num*1)
    console.log(num+" x 2 = "+num*2)
    console.log(num+" x 3 = "+num*3)
    console.log(num+" x 4 = "+num*4)
    console.log(num+" x 5 = "+num*5)
    console.log(num+" x 6 = "+num*6)
    console.log(num+" x 7 = "+num*7)
    console.log(num+" x 8 = "+num*8)
    console.log(num+" x 9 = "+num*9)
    console.log(num+" x 10 = "+num*10)
}
generateTable(2)
console.log("");
generateTable(3)
console.log("");
generateTable(5)
console.log("");
generateTable(8)
console.log("");

//function Greeting
function greeting(personName:string) {
    return "Salam! " + personName
}
let userName = greeting("Sara")
console.log(userName + " is my best friend ");
console.log(userName + " what do you eat?");

