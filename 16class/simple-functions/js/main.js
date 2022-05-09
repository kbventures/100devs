//---Easy
//create a function that subtracts two numbers and alerts the difference

let num1 = prompt('Number 1')

let num2 = prompt('Number 2')

function subtract(numOne, numTwo){
    alert(Number(numOne - numTwo))
}

subtract(num1,num2)

//create a function that divides three numbers and console logs the quotient


function divides(num1, num2, num3){
    console.log(num1 / num2 / num3);
}

divides(6,2,1)

//create a function that multiplys three numbers and returns the product


function multiply(num1, num2, num3){
    return num1 * num2 * num3
}

multiply(1,2,3)

//---Medium
//create a function that takes in three numbers. Add the first two numbers 
//and return the remainder of dividing the sum of the first two numbers by the
// third number


function medium(num1, num2, num3){

    let temp = num1 + num2; 
    return temp % num3;
}

medium(1,2,3)


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
// If the product is greater than 100 add the sum of the last two numbers and
// console log the value. If the product is less that 100, subtract the 
//difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and 
//alert the remainder of dividing the fourth number


function hard(num1, num2, num3, num4){

    let temp = num1 * num2; 


    if(temp > 100){
        console.log(Number(num1 + num2))
    } else if( temp < 100){
        console.log(Number(num3 - num4))
    } else if(temp ===100){
        temp = num1 * num2 * num3;
        alert(Number(temp % num4))
    }
}

hard(1,2,3,4)