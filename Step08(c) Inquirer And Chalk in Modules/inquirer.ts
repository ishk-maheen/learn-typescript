import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([
    {
        type: "input",
        name: "age",
        message: chalk.redBright.bold("Enter your age:")
    }
])
console.log(chalk.yellowBright.italic("Your current age is:", answers.age));

