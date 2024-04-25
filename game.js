let targetNumber;
let attempts = 0;
const maxAttempts = 10;

function setRange() {
    const maxNumberInput = document.getElementById('maxNumber');
    const maxNumber = parseInt(maxNumberInput.value);
    if (isNaN(maxNumber) || maxNumber < 10 || maxNumber > 100) {
        alert("Bitte eine Zahl zwischen 10 und 100 eingeben!");
        return;
    }
    targetNumber = Math.floor(Math.random() * maxNumber);
    document.getElementById('instructions').style.display = 'none';
    maxNumberInput.style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('rangeDisplay').innerText = `Rate die Zahl zwischen 0 und ${maxNumber}`;
    document.getElementById('maxValueSpan').innerText = maxNumber;
    document.getElementById('userGuess').max = maxNumber;
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').disabled = false;
    document.getElementById('feedback').innerText = '';
    document.getElementById('resetButton').style.display = 'none';
    attempts = 0;
}

function makeGuess() {
    const guessInput = document.getElementById('userGuess');
    const guess = parseInt(guessInput.value);
    const maxNumber = parseInt(document.getElementById('maxValueSpan').innerText);
    if (isNaN(guess) || guess < 0 || guess > maxNumber) {
        alert(`Bitte eine gültige Zahl zwischen 0 und ${maxNumber} eingeben!`);
        return;
    }
    attempts++;
    if (guess === targetNumber) {
        document.getElementById('feedback').innerText = `Du hast gewonnen! ${attempts} Versuche hast du gebraucht.`;
        guessInput.disabled = true;
        document.querySelector('#game button').disabled = true;
        document.getElementById('resetButton').style.display = 'inline';
    } else if (guess < targetNumber) {
        document.getElementById('feedback').innerText = "höhere Zahl";
    } else {
        document.getElementById('feedback').innerText = "kleinere Zahl";
    }
    if (attempts >= maxAttempts) {
        document.getElementById('feedback').innerText += " Spiel vorbei!";
        guessInput.disabled = true;
        document.querySelector('#game button').disabled = true;
        document.getElementById('resetButton').style.display = 'inline';
    }
}

function resetGame() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('maxNumber').style.display = 'inline';
    document.querySelector('button').style.display = 'inline'; // Dies ist der Setzen-Button, der sichtbar wird.
    document.getElementById('game').style.display = 'none';
    document.getElementById('maxNumber').value = '';

    // Reaktiviere den Raten-Button und das Eingabefeld
    document.getElementById('userGuess').disabled = false;
    document.querySelector('#game button').disabled = false; // Reaktiviere speziell den Raten-Button
}

