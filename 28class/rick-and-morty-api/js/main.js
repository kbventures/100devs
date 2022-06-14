

// There are 41 pages, 1 to 42
// All pages have 20 characters except the last one(6)

let currentId;
let currentPage; 
let currentPageArray;
let results = 

localStorage.clear()



if(!localStorage.getItem('currentId')){
  localStorage.setItem('currentId',0)
  localStorage.setItem('currentPage',1)
  currentId = 0;
  currentPage = 1; 
  getArray();
} else {
  // currentId = localStorage.getItem('currentId')
  // currentPage = localStorage.getItem('currentPage')
}




function getArray() {
  
  let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      currentPageArray = data; 
      // console.log(currentPageArray)
      updateCard(currentPageArray.results[currentId])
    })
    .catch(err=>{
      console.log(err)
    })

}

function updateCard(character){    
      document.querySelector('img').src = character.image
      document.querySelector('.name').innerText = character.name
      document.querySelector('.status').innerText = character.status + ":"
      document.querySelector('.species').innerText = character.species;
      document.querySelector('.location').innerText = character.location.name;
}




// Object.keys(myObj).length;

document.getElementById('right').addEventListener('mousedown', ()=>{
  
  //  // here
   console.log('Test 1 Currenty Id:', currentId)
   console.log('Test 2 Current Page Array Results Length:',(Object.keys(currentPageArray.results).length))
   let temp = (Object.keys(currentPageArray.results).length -1);

  if(currentId < temp) {
    console.log('Test 3: ',currentId)
    console.log('Test 4:',currentPage)
    currentId++
    updateCard(currentPageArray.results[currentId])
    console.log('card test')
    console.log('test5')

  } else if (currentPage <= 42) {
     
    console.log('test 6')
      currentId = 0;
     currentPage++
     console.log(currentId, currentPage)
     getArray()
  } else {
    // nothing happens
  }
})




// document.getElementById('left').addEventListener('mousedown', leftClick())

// function rightClick() {
//   console.log(currentPageArray)
//   if(currentId !== updateCard(currentPageArray.length -1 )){
//     currentId++
//     updateCard(currentPageArray.results[currentId])
//   } else if (currentPage === 42) {
    
//   }
// }
































