//Get a dog photo from the dog.ceo api and place the photo in the DOM






//Example fetch using pokemonapi.co


// function getFetch(){
//   const url = 'https://dog.ceo/api/breeds/image/random'
  

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data.message;
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// getFetch()




function getBooze(){
  const url = 'https://www.thecocktaildb.com/api.php?i=vodka'
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // document.querySelector('img').src = data.message;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getBooze()