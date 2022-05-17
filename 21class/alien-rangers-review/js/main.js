//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const tv = ['zili', 'ziwi', 'zulu']

for(let i = 0; i < tv.length;i++){
    console.log(tv[i])
}

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

const num = [1,2,3]


const newNum = num.filter(e=>{
    if(e%2===0){
        return e
    }
})

console.log(newNum)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


const random = [1,2,3,4]

function thisFunction(arr){
    console.log(arr)
let temp = Math.max(...arr) + Math.min(...arr);
alert(temp)
}


thisFunction(random)