//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods



function TH(prop1,prop2,prop3,prop4){
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;
    this.prop4 = prop4;
    this.move = function(){
        console.log("Tony Hawk Move")
    }
    this.move2 = function(){
        console.log(this.prop1)
    }

}


const newTH = new TH(1,'Yellow',3,4)

console.log(newTH.move2)
// 1
