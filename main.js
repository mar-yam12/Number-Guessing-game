"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Guess a number between 1 to 9");
// Creating variable
var a = Math.floor(Math.random() * 10);
var inquirer_1 = require("inquirer");
while (true) {
    var input = await inquirer_1.default.prompt({ name: "guess", type: "number",
        message: "enter your guess number" });
    //Code For given number
    var ans = input.guess;
    if (a == ans) {
        console.log("Congralution your guess number is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
    // Adding Hint
    if (a > ans) {
        console.log("Hint: number is higher");
    }
    else {
        console.log(" Hint: number is lower");
    }
    ;
    console.log("Game Over");
}
