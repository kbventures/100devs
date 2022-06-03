



let currentId;
let currentPage; 

// localStorage.clear()


if(!localStorage.getItem('currentId')){
  localStorage.setItem('currentId',0)
  localStorage.setItem('currentPage',1)
  currentId = 0;
} else {
  currentId = localStorage.getItem('currentId')
  currentPage = localStorage.getItem('currentPage')
}




 
const previousOrNext = document.querySelectorAll('i')

previousOrNext.forEach(d => d.addEventListener('click', previousOrNextChoic))


function previousOrNextChoic(event){
  // console.log(event.target)
  // console.log(event.target.id)
  if(event.target.id === 'right'){
    console.log('right')
 
  } else {
    console.log('left')
    if(currentId !== 0){
      console.log('do nothing')
    }
  }
}



function getCharFromPage(charNum,pageNum){
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;

  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      let currChar = data.results[charNum]; 
      document.querySelector('img').src = currChar.image
      document.querySelector('.name').innerText = currChar.name
      document.querySelector('.status').innerText = currChar.status
      document.querySelector('.species').innerText = currChar.species;
      document.querySelector('.location').innerText = currChar.location.name;
    })
    .catch(err=>{
      console.log(err)
    })
}

getCharFromPage(currentId,currentPage)



// https://css-tricks.com/css-only-carousel/




