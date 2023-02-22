import './style.css'

const hero = {
  elementId: "hero",
  name: `Wizard`,
  avatar: `images/wizard.png`,
  health:60,
  diceCount:3 
}

const monster = {
  elementId:"monster",
  name:`Orc`,
  avatar: `images/orc.png`,
  health:10,
  diceCount:1,   
}

function getRollHtml(rollCount){
  return getDiceRollArray(rollCount).map((die)=>{
    return `<div class="dice">${die}</div>`
  }).join('')
}

function getDiceRollArray(count){
  return new Array(count).fill(0).map(()=>{
    return getRandomDice()
  });
}

function getRandomDice(){
  return Math.floor((Math.random()*6)+1)
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount} = data
  const diceHtml = getRollHtml(diceCount)

  document.getElementById(elementId).innerHTML =
      `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">
              ${diceHtml}
          </div>
      </div>`
}

renderCharacter(hero);
renderCharacter(monster);