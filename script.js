const body = document.querySelector('body')
const againBtn = document.querySelector('.again');
const guess = document.querySelector('.guess')
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');

let secretNumber = Math.ceil(Math.random()*20);
const displayMessage = (displayedMessaged) => {
    message.textContent = displayedMessaged
}

checkBtn.addEventListener('click', guessNumber);
function guessNumber(e) {
    e.preventDefault();
    let inputValue = +document.querySelector('.number').value;
    if (!inputValue) {
        displayMessage("No Number")
    } else if (secretNumber === inputValue) {
        displayMessage("Correct Number")
        guess.textContent = secretNumber
        body.style.backgroundColor = "#60b347"
        if(+(score.textContent) > +(highScore.textContent)){
            highScore.textContent = score.textContent
        }
    } else if (inputValue !== secretNumber) {
        if(score.textContent > 1 ){
            displayMessage(inputValue > secretNumber? "Too High" :"Too Low")
            --score.textContent
        } else {
            displayMessage("You Lose The Game")
            score.textContent = '0'
        }
    } 
}

againBtn.addEventListener('click', restHandler)
function restHandler() {
    displayMessage("Start guessing...")
    body.style.backgroundColor = "#222"
    score.textContent = 20
    inputValue = document.querySelector('.number').value = ""
    guess.textContent = "?"
    secretNumber = Math.ceil(Math.random()*20);
}




