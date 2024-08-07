const words = ['javascript', 'html', 'css', 'programacion'];
let selectedWord;
let guessedLetters;
let wordDisplay;

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wordDisplay = selectedWord.split('').map(() => '_').join(' ');
    document.getElementById('word').textContent = wordDisplay;
    document.getElementById('letters').innerHTML = '';
}

function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        updateWordDisplay();
    }
}

function updateWordDisplay() {
    wordDisplay = selectedWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
    document.getElementById('word').textContent = wordDisplay;
    if (!wordDisplay.includes('_')) {
        alert('¡Ganaste!');
    }
}

resetGame();

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
letters.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.onclick = () => guessLetter(letter);
    document.getElementById('letters').appendChild(button);
});
