//Create a conditonal that checks their age


let age = prompt('What is your age?')


if(age <16){
    console.log('NO driving')
} 
if(age < 18){
    console.log('No club')
} 
if (age < 21){
    console.log('No booze')
} 
if(age < 25){
    console.log('No rent car')
} 
if(age <30){
    console.log('No fancy')
} 
if(age > 30){
    console.log('You dead bro')
    document.querySelector('h1').innerHTML = age; 
} 


document.querySelector('h1').addEventListener('click', check)


function check(){
    let thisH1Value = document.querySelector('#danceDanceRevolution').value
}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
