// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let thisVar = 'coke';
console.log(thisVar)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let mulWords ="Hello Apple Moula"

console.log(mulWords.includes('Apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function thisFun(){

    const rVal =Math.random()

    if(rVal > 0.66){
        return "Rock"
    } else if(rVal < 0.66 > 0.33){
        return "scissor"
    } else{
        return "paper"
    }

}

thisFun()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function gameTime(whoWon){
    const vs = thisFun()

    if(whoWon == "rock" && vs == "scissors"){
        return "You Win!"
    } else if(whoWon == "paper" && vs == "rock"){
        return "You win!"
    } else if(whoWon == "scissors" && vs == "paper"){
        return "You Win!"
    } else {
        return "You Loose!"
    }
}




//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function gameTimes(x){

x.forEach(element => {
    let result = gameTime(element)
    console.log(result)
});

}

gameTimes(['rock','paper','scissors'])