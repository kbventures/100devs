// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let food = "burger";

food ="salad";

alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)


let newVariables ='string';

alert(newVariables[2])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function thisFunction(num1,num2,num3){

    return alert((num1 / num2) * num3)
}

thisFunction(4,2,3)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.


function thisOtherFunction(num1){
    console.log(Math.pow(num1,2))
}

thisOtherFunction(2)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


function isThisMonth(month){

    if(month === month.toLowerCase()){
        alert('YAY')
    } else {
        alert('boo')
    }
}

isThisMonth("july")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.


function mathStuff(numb){

    for(let i=1;i<numb;i++){
        if(i % 5 == 0){
          
        } else{
            console.log(i)
        }
    }
}

mathStuff(10)