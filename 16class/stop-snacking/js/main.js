//Create a function that grabs the number of snacks from the input and tells you to stop that many times



document.querySelector('#help').addEventListener('click', help)


function help (){

    let howMany = document.querySelector('input').value;
    document.querySelector('#stops').innerHTML += '' 
    for(let i = 0; i< howMany; i++){
    document.querySelector('#stops').innerHTML += 'stop!  ' 
    }
}
