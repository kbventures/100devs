//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods





function Fighter(prop1, prop2,prop3,prop4){
    this.name = prop1;
    this.skill = prop2;
    this.style = prop3;
    this.color = prop4;
    this.attack = () => {
        console.log("attack!")
    }
}


let redFighteer = new Fighter('ken','killer', 'kungfu','white')


redFighteer.attack()