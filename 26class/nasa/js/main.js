// API KEY
//7qODGupf3OHZvJdEfS9nw0301v6a1iDpJoRYFC3i

document.querySelector('button').addEventListener('click',randomImage)

let url = 'https://api.nasa.gov/planetary/apod?api_key=7qODGupf3OHZvJdEfS9nw0301v6a1iDpJoRYFC3i'
let urlRandomImage = 'https://api.nasa.gov/planetary/apod?api_key=7qODGupf3OHZvJdEfS9nw0301v6a1iDpJoRYFC3i&count=1'

function getFetch(){

fetch(url)
  .then(res=> res.json())
  .then(data =>{
    console.log(data)
    let element = document.querySelector('.hero-image');
    console.log(element.style)
    element.style.backgroundImage = `url('${data.url}')`;
  })
  .catch(err=>
    console.log(`Error: + ${err}`))

  }


  getFetch()



  function randomImage(){
    fetch(urlRandomImage)
      .then(res =>res.json())
      .then(data => {
        console.log(data)
        let element = document.querySelector('.hero-image')
        element.style.backgroundImage = `url('${data[0].url}')`
      })
      .catch(err=> console.log(err))
  }


































