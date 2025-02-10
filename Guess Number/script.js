let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultparas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}



function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please Enter A Valid Number`)
    }
    else if(guess < 1){
        alert(`Please Enter A Number More Than 1`)
    }
    else if(guess > 100){
        alert(`Please Enter A Number Less Than 100`)    
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            dipplayMessage(`Game Over Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



function checkGuess(guess){
    if(guess === randomNumber){
        dipplayMessage(`You Guess Right`)
        endGame()
    }else if(guess < randomNumber){
            dipplayMessage(`You Guess is Low`)
        }
        else if(guess > randomNumber){
            dipplayMessage(`You Guess is High`)
        }
    }



function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} - `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function dipplayMessage(messgae){
    lowOrHi.innerHTML = `<h2>${messgae}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
function endGame(){
userInput.value = "";
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h3 id="newGame">Start New Game</h3>`
startOver.appendChild(p)
playGame = false
newGame()
}



