/*
Stwitch Case Syntax
1. expression...... 
2. value.....
3. block of code......
4. break......
5. default.....
*/

//Switch Case
//Example 1
let day = 3
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

//Example 2
let today: string = "Tuesday";
switch (today){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Go to Office");
        break;
    case "Saturday":
        console.log("Today is last working day");
        break;
    case "Sunday":
        console.log("Today is Holiday");
        break;
    default:
        console.log("Invalid Day");
        break       
}

// Example 3 switch case using inquirer
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
    name: "input",
    type: "list",
    message: "Enter a day number",
    choices: [1, 2, 3, 4, 5, 6, 7]
}])

switch (answer.input){
    case 1: console.log("Manday"); break;
    case 2: console.log("Tuesday"); break;
    case 3 : console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day number"); break; 
}