let total =0; 

document.querySelector('#pumpkin').addEventListener('click', resetToZero)
document.querySelector('#dominosPizza').addEventListener('click', plus3)
document.querySelector('#zebra').addEventListener('click', plus9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', minus2)



function resetToZero(){
  total = 0; 
  document.querySelector('#placeToPutResult').innerHTML = total; 
}

function plus3(){
  total = total + 3 ; 
  document.querySelector('#placeToPutResult').innerHTML = total; 
}

function plus9(){
  total = total + 9; 
  document.querySelector('#placeToPutResult').innerHTML = total; 
}

function  minus2(){
  total = total -2; 
  document.querySelector('#placeToPutResult').innerHTML = total; 
}