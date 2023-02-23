const getDiceRollArray = count => new Array(count).fill(0)
  .map(()=> getRandomDice());
  
const getRandomDice = () => Math.floor((Math.random()*6)+1)

const getPlaceholderHtml = count => new Array(count).fill(0)
  .map((item)=> `<div class="placeholder-dice"></div>`).join('')

const getPercentage = (remainingHealth, maximumHealth) => (remainingHealth * 100)/maximumHealth


export {getDiceRollArray, getRandomDice, getPlaceholderHtml, getPercentage} 