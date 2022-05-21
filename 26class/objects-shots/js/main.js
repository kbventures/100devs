//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM




  

  fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });





