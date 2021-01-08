//Declaring constants 
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
//Player score and computer score
let playerScore = 0;
let computerScore = 0;

/**
 * randomly returns 'Rock', 'Paper' or 'Scissors'
 */
const computerPlay = () => {
    let items = ['Rock', 'Paper', 'Scissors'];

    return items[Math.floor(Math.random() * 3) % 3];
}

/**
 * This deetermines the winner for this round and updates scores
 * @param {string} playerSelection 
 * @param {string} computerSelection
 */
const singleRound = (playerSelection, computerSelection) => {
    // Will convert words to lowercase
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    // This is getting the html elements
    let textElem = document.getElementById('text');
    let playerScoreElem = document.getElementById('playerScore');
    let computerScoreElem = document.getElementById('computerScore');

    // Need to account for ties
    if (player == computer) {
        textElem.textContent = 'Tie!';
    }

    // Using logic this will determine a winner
    if (player == ROCK && computer == PAPER) {
        textElem.textContent = 'You lose! Paper beats Rock';
        computerScore++;
    }
    else if (player == ROCK && computer == SCISSORS) {
        textElem.textContent = 'You win! Rock beats Scissors';
        playerScore++;
    }
    else if (player == PAPER && computer == ROCK) {
        textElem.textContent = 'You win! Paper beats Rock';
        playerScore++;
    }
    else if (player == PAPER && computer == SCISSORS) {
        textElem.textContent = 'You lose! Scissors beats Paper';
        computerScore++;
    }
    else if (player == SCISSORS && computer == ROCK) {
        textElem.textContent = 'You lose! Rock beats Scissors';
        computerScore++;
    }
    else if (player == SCISSORS && computer == PAPER) {
        textElem.textContent = 'You win! Scissors beats Paper';
        playerScore++;
    }
    
    // Update UI for the score
    computerScoreElem.textContent = computerScore;
    playerScoreElem.textContent = playerScore;
}

/**
 * play one round against the computer
 * declare winner if player or computer has 5 points
 * @param {string} playerSelection 
 */
const playRound = (playerSelection) => {
    // get a random play for the computer
    let computerSelection = computerPlay();

    // play a single round
    singleRound(playerSelection, computerSelection);

    // check for a winner
    if (computerScore == 5 || playerScore == 5) {
        // show game over screen
        document.getElementById('gameover-screen').classList.remove('hidden');

        // set winner text
        if (computerScore == 5) {
            document.getElementById('winner-text').textContent = 'Computer has won!';
        }
        else {
            document.getElementById('winner-text').textContent = 'You have won!';
        }
    }
}

/**
 * resets the whole game and UI
 */
const reset = () => {
    // reset scores
    playerScore = 0;
    computerScore = 0;

    // reset ui
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('text').textContent = 'Click on one of the buttons to start playing! First to 5 points wins.';

    // hide game over screen
    document.getElementById('gameover-screen').classList.add('hidden');
}