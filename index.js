function getScore() {
    let computerInput = window.localStorage.getItem('computerInput')
    let playerInput = window.localStorage.getItem('playerInput')

    let scoreEl = document.getElementById('score')
    let scoreText = ''

    if(computerInput === playerInput) {
        scoreText = 'draw'
    } else if ((playerInput === 'rock' && computerInput==='scissor') || (playerInput === "paper" && computerInput === 'rock') || (playerInput === "scissor" && computerInput === 'paper')) {
        scoreText = 'player won'
    } else {
        scoreText = 'computer won'
    }

    scoreEl.textContent = scoreText
}

function playComputer() {
    let options = ['rock', 'paper', 'scissor']
    let computerIndex = Math.floor(Math.random() * 3)
    let computerOption = options[computerIndex]

    let computerOutputEl = document.getElementById('computer-value')
    computerOutputEl.innerText = computerOption

    window.localStorage.setItem('computerInput', computerOption)
    getScore()
}

document.getElementById('player-submit').addEventListener('click', (evt) => {
    let inputEl = document.getElementById('player-select')
    let playerInput = inputEl.value

    window.localStorage.setItem('playerInput', playerInput)
    playComputer()
})

