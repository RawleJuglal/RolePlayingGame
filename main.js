import './style.css'
import characterData from './data'
import Character from './Character'




const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster)

document.getElementById('hero').innerHTML = wizard.getCharacterHtml()

document.getElementById('monster').innerHTML = orc.getCharacterHtml()