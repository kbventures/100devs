// basic


const getFruit = async(name)=>{
    const fruits = {
        pineapple: 'Pineapple',
        peach: 'Peach',
        strawberry: 'Strawberry'
    }


    return fruits[name];
}





// Async + Await


const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a,b]
}




module.exports = getFruit;