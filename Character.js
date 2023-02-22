import { getDiceRollArray, getRandomDice } from "./utils";

function Character(data) {
    Object.assign(this, data);
  
    this.getCharacterHtml = function (){
      const { elementId, name, avatar, health, diceCount, getRollHtml } = this;
        const diceHtml = getRollHtml(diceCount);
  
        return`<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceHtml}
            </div>
        </div>`
    }
  
    this.getRollHtml = function getRollHtml(rollCount){
      return getDiceRollArray(rollCount).map((die)=>{
        return `<div class="dice">${die}</div>`
      }).join('')
    }
  }

  export default Character;