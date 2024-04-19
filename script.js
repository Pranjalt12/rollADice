const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollButton = document.getElementById('roll-button');

const diceImages = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png'
]; // Replace with your actual image paths if needed

rollButton.addEventListener('click', function () {
  const dice1Roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
  const dice2Roll = Math.floor(Math.random() * 6) + 1;
  const totalRoll = dice1Roll + dice2Roll;

  dice1.src = diceImages[dice1Roll - 1];
  dice2.src = diceImages[dice2Roll - 1];


});
var ind = document.getElementsByClassName('ind')[0]
var i = 0
rollButton.addEventListener('click', ()=>{
  if(i==0){
    ind.style.backgroundColor = 'blue';
    i++
  }
  else{
    ind.style.backgroundColor = 'red';
    i--
  }
})