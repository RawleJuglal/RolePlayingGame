import { getDiceRollArray, getRandomDice, getPlaceholderHtml, getPercentage } from "./utils";

class Character{
  constructor(data){
    Object.assign(this, data);
    this.maxHealth = this.health;
    this.diceHtml = getPlaceholderHtml(this.diceCount)
  }

  getCharacterHtml(){
    const { name, avatar, health, diceCount, diceHtml } = this;
    const healthBar = this.getHealthBarHtml()

      return`<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
            ${healthBar}
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`
  }

  setRollHtml(){
    const { diceCount } = this;
    this.currentDiceScore = getDiceRollArray(diceCount)
    this.diceHtml =  this.currentDiceScore.map(die => `<div class="dice">${die}</div>`).join('')
  }

  takeDamage(attackScoreArray){
    const totalAttackScore = attackScoreArray.reduce((prev,curr) => prev + curr)
    this.health -= totalAttackScore;
    if(this.health<=0){
        this.dead = true;
        this.health = 0
    }
  }

  getHealthBarHtml(){
    const percent = getPercentage(this.health, this.maxHealth)
    return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 25 ? 'danger' : ''} " 
                    style="width: ${percent}%;">
                </div>
            </div>`
    }
}

export default Character;