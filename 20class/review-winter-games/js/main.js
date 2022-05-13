//Create a function that takes in an array of numbers. Return a new array containing every 
// even number from the original array (do not use map or filter)



function fun(arr){

    let temp = [];

    for(let i=0;i<arr.length;i++){
        console.log(i)
        if(arr[i] %2 ===0){
            console.log(arr[i])
            temp.push(arr[i])
        }
    }

    return temp;
}


fun([1,2,3,4])