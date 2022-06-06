

// There are 41 pages, 1 to 42
// All pages have 20 characters except the last one(6)

let currentId;
let currentPage; 
let currentArrayLength;


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
  if(event.target.id === 'right'){
    if(currentId !== currentArrayLength -1 ){
      currentId++
      getCharFromPage(currentId,currentPage)
    } else if(currentPage !== 42) {
      currentId = 0
      currentPage++
      getCharFromPage(currentId,currentPage)
    }
 
  } else {
    // console.log('left')
    if(currentId !== 0){
      currentId--
      getCharFromPage(currentId,currentPage)
    }else if(currentPage !== 1) {
      currentId = currentArrayLength -1;
      currentPage--
      getCharFromPage(currentId,currentPage)
    }
  }
}



function getCharFromPage(charNum,pageNum){
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;

  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      currentArrayLength = data.results.length; 
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




function episode(){
  let url = `https://rickandmortyapi.com/api/episode/1`;

  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      console.log(data.pages)
      // document.querySelector('img').src = currChar.image
      // document.querySelector('.name').innerText = currChar.name
      // document.querySelector('.status').innerText = currChar.status
      // document.querySelector('.species').innerText = currChar.species;
      // document.querySelector('.location').innerText = currChar.location.name;
    })
    .catch(err=>{
      console.log(err)
    })
}

getCharFromPage(currentId,currentPage)

episode()



// https://css-tricks.com/css-only-carousel/




