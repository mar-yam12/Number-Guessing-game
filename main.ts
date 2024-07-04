console.log("Guess a number between 1 to 9");

// Creating variable

let a : number = Math.floor(Math.random()*10);
import inquirer from "inquirer";

while(true){
    let input= await inquirer.prompt
    ({name:"guess",type:"number",
    message: "enter your guess number"})


//Code For given number

let ans: number = input.guess

if(a==ans)
{ console.log("Congralution your guess number is correct")
    break;}
 else {console.log("sorry try again")}

// Adding Hint

if (a>ans){console.log("Hint: number is higher")
} else { console.log(" Hint: number is lower")};

console.log("Game Over")
}