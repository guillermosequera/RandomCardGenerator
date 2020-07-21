const card = document.querySelector('.card');
const number = document.querySelector('.numbers');

Suits = ['hearts','diamonds','clubs','spades'];
Numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

let  TheCard = Suits[Math.floor(Math.random() * Suits.length)];
let  TheNumber = Numbers[Math.floor(Math.random() * Numbers.length)];


card.classList.add(TheCard);
number.innerHTML = TheNumber;