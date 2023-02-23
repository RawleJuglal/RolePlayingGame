(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const m={hero:{name:"Wizard",avatar:"images/wizard.png",health:60,diceCount:3,currentDiceScore:[]},orc:{name:"Orc",avatar:"images/orc.png",health:30,diceCount:1,currentDiceScore:[]},demon:{name:"Demon",avatar:"images/demon.png",health:25,diceCount:2,currentDiceScore:[]},goblin:{name:"Goblin",avatar:"images/goblin.png",health:20,diceCount:3,currentDiceScore:[]}},v=a=>new Array(a).fill(0).map(()=>p()),p=()=>Math.floor(Math.random()*6+1),y=a=>new Array(a).fill(0).map(e=>'<div class="placeholder-dice"></div>').join(""),H=(a,e)=>a*100/e;class u{constructor(e){Object.assign(this,e),this.maxHealth=this.health,this.diceHtml=y(this.diceCount)}getCharacterHtml(){const{name:e,avatar:c,health:o,diceCount:t,diceHtml:r}=this,s=this.getHealthBarHtml();return`<div class="character-card">
          <h4 class="name"> ${e} </h4>
          <img class="avatar" src="${c}" />
          <div class="health">health: <b> ${o} </b></div>
            ${s}
          <div class="dice-container">    
              ${r}
          </div>
      </div>`}setRollHtml(){const{diceCount:e}=this;this.currentDiceScore=v(e),this.diceHtml=this.currentDiceScore.map(c=>`<div class="dice">${c}</div>`).join("")}takeDamage(e){const c=e.reduce((o,t)=>o+t);this.health-=c,this.health<=0&&(this.dead=!0,this.health=0)}getHealthBarHtml(){const e=H(this.health,this.maxHealth);return`<div class="health-bar-outer">
                <div class="health-bar-inner ${e<25?"danger":""} " 
                    style="width: ${e}%;">
                </div>
            </div>`}}let g=["orc","demon","goblin"],l=!1;function f(){const a=m[g.shift()];return a?new u(a):{}}document.getElementById("attack-button").addEventListener("click",()=>{l||(n.setRollHtml(),i.setRollHtml(),n.takeDamage(i.currentDiceScore),i.takeDamage(n.currentDiceScore),d(),n.dead?setTimeout(()=>h(),1500):i.dead&&(l=!0,g.length>0?setTimeout(()=>{i=f(),d(),l=!1},1e3):setTimeout(()=>h(),1500)))});function h(){l=!0;const a=n.health===0&&i.health===0?"No victors - all creatures are dead":n.health>0?"The Wizard Wins":`The ${i.name} is Victorious`,e=n.health>0?"🔮":"☠️";document.querySelector("body").innerHTML=`<div class="end-game">
        <h2>Game Over</h2>
        <h3>${a}</h3>
        <p class="end-emoji">${e}</p>
    </div>`}function d(){document.getElementById("hero").innerHTML=n.getCharacterHtml(),document.getElementById("monster").innerHTML=i.getCharacterHtml()}const n=new u(m.hero);let i=f();d();
