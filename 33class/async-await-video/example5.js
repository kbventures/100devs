const getFruit = require('./example4.js');

const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}


const fruitRace = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}