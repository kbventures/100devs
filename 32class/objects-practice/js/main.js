// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 




class Animal{
    constructor(species){
        this._species = species;
    }


    get species(){
        return this._species;
    }

    speciesVoice(){
        console.log('Noise')
    }
}


const animalSpecies = new Animal('mamals')

animalSpecies.species = 'maash'

console.log(animalSpecies.species)



console.log(animalSpecies.species)

class Cat extends Animal{
    constructor(species, catType){
        super(species)
        this.catType = catType;
    }

    get catType(){
        return this.catType;
    }

    catMoew(){
        console.log('Meow!')
    }

    speciesVoice(){
        console.log('Meow Noise')
    }
}



class Dog extends Animal{
    constructor(dogType, species){
        super(species)
        this.dogType = dogType;
    }

    bark(){
        console.log('Woof!')
    }
}


































// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
