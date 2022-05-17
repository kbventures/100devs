// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console


let thisVariable = "TURD"

thisVariable = "XMAS"

console.log(thisVariable)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)


let thisOtherVariable = 'Bort'

alert(thisOtherVariable[1]);

alert(thisOtherVariable[2])

alert(thisOtherVariable[3])




// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function thisOtherFunction(num1,num2,num3,num4,num5){
    let temp = Math.abs(100 - num1- num2- num3- num4- num5);

    alert(Math.abs(100 - num1- num2- num3- num4- num5))
}


thisOtherFunction(27,83,42,1,5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.



function thisFunction(num1,num2,num3){

}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


function headsOrTail(){

    let number = Math.random()
    console.log(number)

    return number > 0.5 ? "Heads": "Tails";
}

headsOrTail()

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function headsOrTail(){

    let number = Math.random()
    console.log(number)

    return number > 0.5 ? "Heads": "Tails";
}
function anotherFunction(num1){
    for(let i=0; i<num1; i++){
        console.log(headsOrTail())
    }
}

anotherFunction(5)