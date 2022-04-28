document.querySelector('#check').addEventListener('click', check)


function check(){
    const day = document.querySelector('#day').value 
    const lowerCaseDay = day.toLowerCase().trim()

    if(lowerCaseDay == "tuesday"|| lowerCaseDay == "thursday"){
        console.log("We go ged!")

        document.querySelector("#placeToSee").innerHTML = 'We go ged!'
    } else if (lowerCaseDay == "saturday" || lowerCaseDay == "sunday"){
        console.log("Weekend")
        document.querySelector("#placeToSee").innerHTML = 'Weekend!'

    } else {
        console.log("Oh no!")
        document.querySelector("#placeToSee").innerHTML = 'Oh no!!'
    }
}