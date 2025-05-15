const openPopUp4 = document.getElementById('balance');
const closePopUp4 = document.getElementById('pop_up_close4');
const popUp4 = document.getElementById('pop_up4');

const openPopUp6 = document.getElementById('user');
const closePopUp6 = document.getElementById('pop_up_close6');
const popUp6 = document.getElementById('pop_up6');


openPopUp4.addEventListener('click', function (e) {
    e.preventDefault();
    popUp4.classList.add('active');
})

closePopUp4.addEventListener('click', () => {
    popUp4.classList.remove('active');
})

openPopUp6.addEventListener('click', function (e) {
    e.preventDefault();
    popUp6.classList.add('active');
})

closePopUp6.addEventListener('click', () => {
    popUp6.classList.remove('active');
})

const coinElement = document.getElementById('coin');
const resultElement = document.getElementById('result');
const headsButton = document.getElementById('guess-heads');
const tailsButton = document.getElementById('guess-tails');
const historyElement = document.getElementById('history');
let flipHistory = [];
let playerGuess = null;

headsButton.addEventListener('click', function () {
    playerGuess = 'Орёл';
    flipCoin();
});

tailsButton.addEventListener('click', function () {
    playerGuess = 'Решка';
    flipCoin();
});

function flipCoin() {
    if (playerGuess === null) {
        resultElement.textContent = 'Сначала выберите орёл или решку!';
        return;
    }

    const randomNumber = Math.random();
    let result = (randomNumber < 0.5) ? 'Орёл' : 'Решка';

    let message = 'Выпало: ' + result + '. ';
    if (result === playerGuess) {
        message += 'Поздравляем! Вы угадали!';
    } else {
        message += 'К сожалению, вы не угадали.';
    }

    resultElement.textContent = message;
    updateCoinDisplay(result);
    updateFlipHistory(result);
    playerGuess = null;
}

function updateCoinDisplay(result) {
    coinElement.textContent = (result === 'Орёл') ? 'Орёл' : 'Решка';
}

function updateFlipHistory(result) {
    flipHistory.push(result);

    if (flipHistory.length > 10) {
        flipHistory.shift();
    }

    historyElement.textContent = "История: " + flipHistory.join(', ');
}



const gridElement = document.getElementById('grid');
const messageElement = document.getElementById('message');
const gridSize = 3;
const numberOfBombs = 3;
let board = [];
let gameOver = false;

function initializeBoard() {
    board = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));

    let bombsPlaced = 0;
    while (bombsPlaced < numberOfBombs) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        if (board[row][col] === 0) {
            board[row][col] = 'B';
            bombsPlaced++;
        }
    }
}


function createGrid() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener('click', handleCellClick);
            gridElement.appendChild(cell);
        }
    }
}


function handleCellClick(event) {
    if (gameOver) return;

    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    if (board[row][col] === 'B') {
        revealAllBombs();
        event.target.classList.add('bomb'); 
        messageElement.textContent = 'Бум! Вы проиграли!';
        gameOver = true;
    } else {
        revealCell(row, col);
        if (checkWinCondition()) {
            messageElement.textContent = 'Поздравляем! Вы выиграли!';
            gameOver = true;
        }
    }
}

function revealCell(row, col) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

    if (!cell || cell.classList.contains('revealed')) return; 

    cell.classList.add('revealed');


}

function revealAllBombs() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (board[row][col] === 'B') {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                cell.classList.add('bomb', 'revealed');
                cell.textContent = '💣';
            }
        }
    }
}

function checkWinCondition() {
    let revealedCount = 0;
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        if (cell.classList.contains('revealed')) {
            revealedCount++;
        }
    }
    return revealedCount === (gridSize * gridSize) - numberOfBombs;
}


initializeBoard();
createGrid();


document.addEventListener('DOMContentLoaded', function() {
    const loginDisplay = document.getElementById('loginDisplay');
    const passwordDisplay = document.getElementById('passwordDisplay');

    const login = localStorage.getItem('login'); 
    const password = localStorage.getItem('password'); 

});