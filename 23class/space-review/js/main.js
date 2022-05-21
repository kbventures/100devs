//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.


const number = [1,2,3]

const sum = number.reduce(function(pv, acu){
    return pv +acu; 
})

console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function numNum(numbers){
    return numbers.map(e=>Math.pow(e,2));

}

const test = numNum([1,2,3])

console.log(test)

//Create a function that takes string
//Print the reverse of that string to the console

function rev(st){
    return st.split("").reverse().join("")
}

let test1 = rev("str")

//Create a function that takes in a string
//Alert if the string is a palindrome or not


function palin(strs){
    let temp = strs.split("").reverse().join("")

    for(let i =0; i<strs.length; i++){
        if(strs[i] !== temp[strs[length-1]])
        return "Not a plain"
    }
    alert('Is a plain')
}


const palinCheck = str => alert(str === str.split("".reverse().join("")))

const palinCheck = str => alter( str ===palin(str))

palinCheck('racecar')