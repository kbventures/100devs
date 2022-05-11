//Create an array of movie titles. Loop through the array and each element to the h2.



const movies = ['tuff', 'real tuff', 'really tuff']


for(let i =0; i<movies.length -1; i++){
    document.querySelector('h2').innerHTML += movies[i];
}



//Create an array of numbers. Loop through the array and three to each number and replace the old number.



const numbers = [1,2,3]



function doIt(num){
for(let i =0; i<= num.length -1; i++){
    numbers[i] = num[i] * 3;
    
}
}


doIt(numbers)
console.log(numbers)





//Find the average of all the numbers from question three
