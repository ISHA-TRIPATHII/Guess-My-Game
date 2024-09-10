'use strict';
const secret = Math.trunc(Math.random()*20) + 1;

document.querySelector('.number').textContent = secret;
document.querySelector('.check').addEventListener('click', function (){
   const guess = Number(document.querySelector('.guess').value);
   if(!guess){
    document.querySelector('.message').textContent = 'No Number Found!';
   }
   else if (guess === secret){
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.highscore').textContent = (document.querySelector('.score').textContent);
   }
   else if (guess > secret){
    document.querySelector('.message').textContent = 'Too High!';
    document.querySelector('.score').textContent =(document.querySelector('.score').textContent - 1);
   }
   else if (guess < secret){
    document.querySelector('.message').textContent = 'Too Low!';
    document.querySelector('.score').textContent =(document.querySelector('.score').textContent - 1);
   }

})