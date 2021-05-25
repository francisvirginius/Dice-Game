let globalPlayer1 = null;
let globalPlayer2 = null;
let currentPlayer1 = [] ;
let currentPlayer2 = []  ;
const button2 = document.getElementById("button2");
let dice = 0
let choicebar = document.getElementById("bar")
const reducer1 = (accumulator, currentValue) => accumulator + currentValue;
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;


const pictureDice = document.getElementById('dice-picture')
const diceImage = [
    '../../../',
   './dé/1.png',
   './dé/2.png',
   './dé/3.png',
   './dé/4.png',
   './dé/5.png',
   './dé/6.png'
]
pictureDice.src = diceImage[0]

/* reset to zero   */ 
function zero(){
    globalPlayer1 = 0
    globalPlayer2 = 0
    currentPlayer1 = [null]
    currentPlayer2 = [null]
    cplayer1 = null
    cplayer2 = null
    dice = null
    choosePlayer = null
    let choose = Math.floor(Math.random()*2);
    dice = choose
    count.innerHTML = 0
    count2.innerHTML = 0
    global1.innerHTML = 0
    global2.innerHTML = 0
}
/* send to global*/ 
function global(){
 if (dice === 1){
   //player 1
    let global = [null]
    global.push(cplayer1)
    globalPlayer1 = global.reduce(reducer1) + globalPlayer1
    global1.innerHTML = globalPlayer1
    cplayer1 = 0
    count.innerHTML = 0
    dice = 0
    currentPlayer1 = [0]

 }else{
   // player 2
    let global = [null]
    global.push(cplayer2)
    globalPlayer2 = global.reduce(reducer2) + globalPlayer2 
    global2.innerHTML = globalPlayer2
    cplayer2 = 0
    count2.innerHTML = 0
    dice = 1
    currentPlayer2 =[0]
 }
 /* check score 100 */ 
 if (globalPlayer1 >= 100 ){
    alert('vous avez gagner !!')
}else{
   null
 }
}
 /* button Roll dice */
 button2.addEventListener('click',()=>{
   /* random choice with zero() */ 
    if (dice === 1 ){
          /* dice1 = throw dice  */ 
          let dice1 = Math.floor(Math.random()*(7 - 1) + 1);
          choicebar.style.float = "left"
          pictureDice.src = diceImage[dice1]
         if (dice1 === 1){
              count.innerHTML = 0
              dice = 0
              currentPlayer1 = [null]
              cplayer1 = null
              dice1 = 0
              alert('Vous etez tomber sur 1 !!')
            }else{
                    currentPlayer1.push(dice1)
                    cplayer1 = currentPlayer1.reduce(reducer1)
                    count.innerHTML  = cplayer1 
        }
   }else if(dice === 0 ){
        /* dice2 = throw dice  */ 
        let dice2 = Math.floor(Math.random()*(7 - 1) + 1);
        choicebar.style.float = "right"
        pictureDice.src = diceImage[dice2]
        if (dice2 === 1){
              count2.innerHTML = 0
              dice = 1
              currentPlayer2 = [null] 
              cplayer1 = null
              dice2 = 0
              alert('Vous etez tomber sur 1 !!')
              }else{
                currentPlayer2.push(dice2)
              cplayer2 = currentPlayer2.reduce(reducer2)
              count2.innerHTML  = cplayer2
              dice = 0


              }


            }else{alert('game over')}
  })
  