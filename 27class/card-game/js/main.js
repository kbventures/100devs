



let newDeckIdUrl = "https://deckofcardsapi.com/api/deck/new/";
var deckIdentification = "";


if (localStorage.getItem("deckId") === null) {
  getNewDeckId()
} else {
  deckIdentification = localStorage.getItem('deckId')
  console.log(deckIdentification)
}





function getNewDeckId(){

  fetch(newDeckIdUrl)
    .then(res => res.json())
    .then(data => {
      console.log('test')
      deckIdentification = data.deck_id;
      localStorage.setItem('deckId',deckIdentification);
      reshuffleRemaningCards()
    })
    .catch(err =>{
      console.log(err)
    })
}





function reshuffleRemaningCards(){
  console.log('test')
  let reshuffleRemaningCardsUrl = `https://deckofcardsapi.com/api/deck/${deckIdentification}/shuffle/?remaining=true copy`
  fetch(reshuffleRemaningCardsUrl)
    .then(res => res.json())
    .then(data => {
      console.log('test')
    })
    .catch(err=>{
      console.log(err)
    })
}





document.querySelector('button').addEventListener('click',getTwoCards)


function getTwoCards(){
  console.log(deckIdentification)
  let getTwoCardsUrl = `https://deckofcardsapi.com/api/deck/${deckIdentification}/draw/?count=2`

  fetch(getTwoCardsUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.cards[0].code)
      console.log(data.cards[1].code)

      // console.log(convertToValue(data.card[0].code))
      // console.log(convertToValue(data.card[1].code))

      const player1CardValue = convertToValue(data.cards[0].code)
      const player2CardValue = convertToValue(data.cards[1].code)

      // console.log(test1)
      // console.log(test2)


      document.querySelector('.image1').src = data.cards[0].image;
      document.querySelector('.image2').src = data.cards[1].image;

      if(player1CardValue > player2CardValue){
        document.querySelector('p').innerHTML = "Player 1 Wins";
      } else if (player2CardValue > player1CardValue){
        document.querySelector('p').innerHTML = "Player 2 Wins";
      } else {
        document.querySelector('p').innerHTML = "Its a draw!";

      }
    })
    .catch(err =>{
      console.log(err)
    })
}



function convertToValue(card){
  let firstCharacterCard = card.charAt(0)
  console.log(firstCharacterCard)
  
  if(firstCharacterCard === 'A'){
    return 14
  } else if (firstCharacterCard === 'K'){
    return 13
  } else if (firstCharacterCard === 'Q'){
    return 12
  } else if (firstCharacterCard === 'J'){
    return 11
  } else if (firstCharacterCard === '0'){
    return 10
  } else {
    return Number(firstCharacterCard)
  }
}




