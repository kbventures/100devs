//Create a constructor with 4 properties and 3 methods


function Pizzamaker(ing1,ing2,ing3,ing4){
    this.ing1 =ing1,
    this.ing2 = ing2,
    this.ing3 = ing3,
    this.ing4 = ing4,
    this.bake = function(){
     console.log(this.ing1)   
    }
}


let hugePizza = new Pizzamaker("cheese","meat","anchovies","cucucmber")


hugePizza.bake