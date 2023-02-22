function getDiceRollArray(count){
    return new Array(count).fill(0).map(()=>{
      return getRandomDice()
    });
  }
  
  function getRandomDice(){
    return Math.floor((Math.random()*6)+1)
  }

  export {getDiceRollArray, getRandomDice} 