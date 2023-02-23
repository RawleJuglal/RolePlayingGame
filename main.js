import './style.css'
import characterData from './data'
import Character from './Character'

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

document.getElementById('attack-button').addEventListener('click', ()=>{
    if(!isWaiting){
        wizard.setRollHtml()
        monster.setRollHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()

        if(wizard.dead){
            setTimeout(()=>endGame(), 1500)
        }
        else if(monster.dead){
            isWaiting = true;
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false;
                },1000)
            }
            else{
                setTimeout(()=>endGame(), 1500)
            }
        }
    }
})

function endGame(){
    isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ?
    "No victors - all creatures are dead" :
    wizard.health > 0 ? "The Wizard Wins" :
    `The ${monster.name} is Victorious`
    const endEmoji = wizard.health > 0 ? '🔮' : '☠️';
    document.querySelector('body').innerHTML = `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster()
render()