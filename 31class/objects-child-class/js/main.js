//Create an a class and extend it - Can be anything you would like it to be! 




// class Animal{
//     constructor(name){
//         this.name = name; 
//     }

//     speak(){
//         console.log('Noise')
//     }
// }


// const weirdAnimal = new Animal('dog')



// class Dog extends Animal{

//     constructor(name, breed){
//         super(name)
//         this.breed = breed; 
//     }



//     speak(){
//         console.log('Woof!')
//     }    
// }


// const cuteDog = new Dog('Fido','Germain Shepperd')

// cuteDog.speak()
// console.log(cuteDog.name)
// console.log(cuteDog.breed)

class Animal{
    constructor(name){
        this._name = name; 
    }

    get name(){
        return this._name
    }

    speak(){
        console.log(this._name)
    }
}


let simba = new Animal('Simba')

console.log(simba.name) // "Simba"

simba.name = 'Bob' // Nothing happens

console.log(simba.name)
console.log(simba._name)
