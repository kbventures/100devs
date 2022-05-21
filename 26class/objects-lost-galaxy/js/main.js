//Create a dog object that has four properties and three methods


let pizza = {
    meat: "none",
    cheese: "extra",
    price: 20,
    bake:function(){
        return alert(this.meat)
    }
}


pizza.bake()