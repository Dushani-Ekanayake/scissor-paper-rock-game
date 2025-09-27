let playerScore = 0;
let computerScore = 0;
const winningScore = 3;

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    updateGestures(playerChoice, computerChoice);

    let result = '';
    if (playerChoice === computerChoice) {
        result = 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'win';
    } else {
        result = 'lose';
    }

    handleResult(result);
}

function updateGestures(player, computer) {
    const emojiMap = {
        rock: '✊',
        paper: '✋',
        scissors: '✌'
    };

    document.getElementById('player-gesture').textContent = emojiMap[player];
    document.getElementById('computer-gesture').textContent = emojiMap[computer];
}

function handleResult(result) {
    if (result === 'win') {
        playerScore++;
        showGlitters(150);
    } else if (result === 'lose') {
        computerScore++;
    }

    if (playerScore === winningScore || computerScore === winningScore) {
        setTimeout(endGame, 1000);
    }
}

function endGame() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.remove('hidden');

    document.getElementById('final-score').textContent =
        `You: ${playerScore} - Computer: ${computerScore}`;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('player-gesture').textContent = '❓';
    document.getElementById('computer-gesture').textContent = '❓';
}

function showGlitters(amount) {
    const glitterContainer = document.getElementById('glitter-container');
    for (let i = 0; i < amount; i++) {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        glitter.style.left = Math.random() * 100 + 'vw';
        glitter.style.backgroundColor = ['gold', 'yellow', 'white'][Math.floor(Math.random() * 3)];
        glitter.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
        glitterContainer.appendChild(glitter);

        setTimeout(() => glitter.remove(), 2000);
    }
}

