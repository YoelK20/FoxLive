const {Card} = require('../models');

async function serveCards() {
    try {
        const allCards = await Card.findAll();
        const randoms = getRandomIndexes();
        let randomCards = [];
        randoms.forEach((item) => {
            randomCards.push(allCards[item])
        })
        
        return randomCards.map(item => {
            const obj = {
                id: item.id,
                cardName: item.cardName,
                imageUrl: item.imageUrl,
                hidden: true
            }
            return obj
        });
    } catch (error) {
        console.log(error);
    }
}

function getRandomIndexes() {
    let array = []
    while (array.length < 9) {
        let random  = getRandomInt(0, 52);
        while (array.includes(random)) {
            random = getRandomInt(0, 52);
        }
        array.push(random);
    }
    return array;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

module.exports = serveCards