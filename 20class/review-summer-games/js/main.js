//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 




function thisArray(arrNum){
    let temp =1; 
    arrNum.forEach(element => {
        temp *= element
    });
    alert(temp)
}



thisArray([1,2,3,4])