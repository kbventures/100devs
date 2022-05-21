// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let thisvar = "This senctence is?";


if(thisvar.endsWith('?')){
    alert(thisvar)
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let thisOtherVar = "This is a phrase jr. dev"

thisOtherVar = thisOtherVar.split('jr. dev').join('software engineer')

console.log(thisOtherVar)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let random =Math.random();
    if(random > 0.66){
        return 'rock'
    } else if (random > 0.33){
        return 'scissors'
    } else {
        return 'paper'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function


function rpsGame(choice){
    let bot = rockPaperScissors();  
    if(bot === choice){
        return 'its a tie'
    } else if(bot === 'rock' && choice == 'paper'){
        return 'You win'
    } else if (bot === 'rock' && choice === 'scissors'){
        return 'You loose'
    } else if(bot ==='scissors'&& choice === 'rock'){
        return 'You Win'
    } else if(bot === 'scissors' && choice === 'paper'){
        return 'You Loose'
    } else if(bot === 'paper' && choice === 'rock'){
        return 'You Loose'
    } else {
        return 'you win'
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
