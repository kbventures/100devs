// Create a function that takes in an array. If the first number, is less than the last number, 
//alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal,
 //alert "We close in an hour".


 function thisArray(arr){
    if(arr[0] < arr[arr.length -1]){
        console.log('Hi')
    }

   
       if(arr[0] > arr[arr.length -1]){
           console.log('Bye')
       }


           if(arr[0] === arr[arr.length -1]){
               console.log('Closed')
           }


}


thisArray([3,2,1])