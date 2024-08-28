// Zmienne
let score = parseInt(localStorage.getItem('score')) || 0;
let clickPower = parseInt(localStorage.getItem('clickPower')) || 1;
let pointsPerSecond = parseInt(localStorage.getItem('pointsPerSecond')) || 0;
let highScore = parseInt(localStorage.getItem('highScore')) || 0;
let count = parseInt(localStorage.getItem('count')) || 0;
let wholeCount = parseInt(localStorage.getItem('wholeCount')) || 0;


// Elementy HTML
const scoreDisplay = document.getElementById('scores');
const highScoreDisplay = document.getElementById('highScore');
const rabbit = document.querySelector('.rabbit');
const clickPowerDisplay = document.getElementById('powerValue');
const clickPrize1 = document.getElementById('clickPrize1');
const clickPrize2 = document.getElementById('clickPrize2');
const clickPrize3 = document.getElementById('clickPrize3');
const clickPrize4 = document.getElementById('clickPrize4');
const buttonPerSec1 = document.getElementById('buttonPerSec1');
const buttonPerSec2 = document.getElementById('buttonPerSec2');
const buttonPerSec3 = document.getElementById('buttonPerSec3');
const buttonPerSec4 = document.getElementById('buttonPerSec4');
const submitButton = document.querySelector('.submit');
const player = document.getElementById('playerName');
const playerNameDisplay = document.querySelector('.playerName');
const playerNameInputDisplay = document.querySelector('.playerNameInput');
const countDisplay = document.getElementById('count');
const wholeCountDisplay = document.getElementById('wholeCount');
const errorMessage = document.getElementById('errorMessage');
const submitButtonNewGame = document.querySelector('.submitButton');

scoreDisplay.innerText = "Punkty: " + score;
countDisplay.innerText = "Liczba przyciśnięć: " + count;
wholeCountDisplay.innerText = "Liczba przyciśnięć wszystkich graczy: " + wholeCount;
highScoreDisplay.innerText = "Peak: " + highScore;
clickPowerDisplay.innerHTML = clickPower;

const requiredScore = 25;  // Wymagana liczba punktów do zwiększenia clickPower
const requiredScore2 = 1000;
const requiredScore3 = 15000;
const requiredScore4 = 100000;
const requiredScorePerSec1 = 100;
const requiredScorePerSec2 = 5000;
const requiredScorePerSec3 = 30000;
const requiredScorePerSec4 = 500000;

// Funkcja tworząca element punktu i dodająca go do DOM
function createPointElement(event) {
    const pointsContainer = document.querySelector('.pointsContainer');
    const rabbit = event.currentTarget;
    const point = document.createElement('div');
    point.className = 'point';
    point.innerText = '+' + clickPower;

    // Ustawienie punktu w miejscu kliknięcia wewnątrz elementu .rabbit
    const rect = pointsContainer.getBoundingClientRect();
    point.style.left = `${event.clientX - rect.left}px`;
    point.style.top = `${event.clientY - rect.top}px`;

    pointsContainer.appendChild(point);

    // Usunięcie elementu po zakończeniu animacji
    point.addEventListener('animationend', () => {
        point.remove();
    });
}

rabbit.addEventListener('click', createPointElement);

function newGame() {

    let previousScore = parseInt(localStorage.getItem('score')) || 0;

    score = 0;
    clickPower = 1;
    pointsPerSecond = 0;
    count = 0;
    highScore = 0;

    localStorage.setItem('score', score);
    localStorage.setItem('clickPower', clickPower);
    localStorage.setItem('pointsPerSecond', pointsPerSecond);
    localStorage.setItem('highScore', highScore);
    localStorage.setItem('count', count);
    localStorage.setItem('wholeCount', wholeCount);

    if (previousScore !== score) {
        window.location.reload();
    }

}

function submitName() {
    // Pobieranie wartości z inputu
    const nameInput = document.getElementById('nameInput').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    // Sprawdzenie, czy pole nie jest puste
    if (nameInput === "") {
        errorMessage.classList.remove('hidden');
        return; // Zatrzymanie dalszego przetwarzania, jeśli pole jest puste
    }
    
    // Ukrycie komunikatu o błędzie (jeśli wcześniej się pojawił)
    errorMessage.classList.add('hidden');
    
    // Wyświetlanie wiadomości powitalnej
    document.getElementById('playerName').innerText = nameInput;
    document.getElementById('welcomeMessage').classList.remove('hidden');
    
    // Ukrywanie elementu z inputem
    document.querySelector('.box.box3').classList.add('hidden');
    
    document.querySelector('.rabbit').classList.remove('disabled');
    // Tutaj można dodać funkcję rozpoczynającą nową grę
    newGame();
}

function updateButtonState() {
    let stats1 = document.getElementById("stats1");
    let stats2 = document.getElementById("stats2");
    let stats3 = document.getElementById("stats3");
    let stats4 = document.getElementById("stats4");
    let statsPerSec1 = document.getElementById("statsPerSec1");
    let statsPerSec2 = document.getElementById("statsPerSec2");
    let statsPerSec3 = document.getElementById("statsPerSec3");
    let statsPerSec4 = document.getElementById("statsPerSec4");

    clickPrize1.disabled = score < requiredScore;
    clickPrize2.disabled = score < requiredScore2;
    clickPrize3.disabled = score < requiredScore3;
    clickPrize4.disabled = score < requiredScore4;
    buttonPerSec1.disabled = score < requiredScorePerSec1;
    buttonPerSec2.disabled = score < requiredScorePerSec2;
    buttonPerSec3.disabled = score < requiredScorePerSec3;
    buttonPerSec4.disabled = score < requiredScorePerSec4;


    if (clickPrize1.disabled) {
        clickPrize1.style.backgroundColor = 'gray';
        stats1.style.backgroundColor = 'gray';
    } else {
        clickPrize1.style.backgroundColor = 'lightgreen';
        stats1.style.backgroundColor = 'lightgreen';
    }

    if (clickPrize2.disabled) {
        clickPrize2.style.backgroundColor = 'gray';
        stats2.style.backgroundColor = 'gray';
    } else {
        clickPrize2.style.backgroundColor = 'lightgreen';
        stats2.style.backgroundColor = 'lightgreen';
    }

    if (clickPrize3.disabled) {
        clickPrize3.style.backgroundColor = 'gray';
        stats3.style.backgroundColor = 'gray';
    } else {
        clickPrize3.style.backgroundColor = 'lightgreen';
        stats3.style.backgroundColor = 'lightgreen';
    }

    if (clickPrize4.disabled) {
        clickPrize4.style.backgroundColor = 'gray';
        stats4.style.backgroundColor = 'gray';
    } else {
        clickPrize4.style.backgroundColor = 'lightgreen';
        stats4.style.backgroundColor = 'lightgreen';
    }

    if(buttonPerSec1.disabled) {
        buttonPerSec1.style.backgroundColor = 'gray';
        statsPerSec1.style.backgroundColor = 'gray';
    } else {
        buttonPerSec1.style.backgroundColor = 'lightgreen';
        statsPerSec1.style.backgroundColor = 'lightgreen';
    }

    if(buttonPerSec2.disabled) {
        buttonPerSec2.style.backgroundColor = 'gray';
        statsPerSec2.style.backgroundColor = 'gray';
    } else {
        buttonPerSec2.style.backgroundColor = 'lightgreen';
        statsPerSec2.style.backgroundColor = 'lightgreen';
    }

    if(buttonPerSec3.disabled) {
        buttonPerSec3.style.backgroundColor = 'gray';
        statsPerSec3.style.backgroundColor = 'gray';
    } else {
        buttonPerSec3.style.backgroundColor = 'lightgreen';
        statsPerSec3.style.backgroundColor = 'lightgreen';
    }

    if(buttonPerSec4.disabled) {
        buttonPerSec4.style.backgroundColor = 'gray';
        statsPerSec4.style.backgroundColor = 'gray';
    } else {
        buttonPerSec4.style.backgroundColor = 'lightgreen';
        statsPerSec4.style.backgroundColor = 'lightgreen';
    }
}
function updatepeakRate() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.innerText = "Peak: " + highScore;
    }
}

function updateCount() {
    count++;
    localStorage.setItem('count', count);
    countDisplay.innerText = "Liczba przyciśnięć: " + count;
}

function updateWholeCount() {
    wholeCount++;
    localStorage.setItem('wholeCount', wholeCount);
    wholeCountDisplay.innerText = "Liczba przyciśnięć wszystkich graczy: " + wholeCount;
}

setInterval(() => {
    if (pointsPerSecond > 0) {
        score += pointsPerSecond;
        scoreDisplay.innerText = "Punkty: " + score;
        localStorage.setItem('score', score);
        updatepeakRate();
        updateButtonState();
    }
}, 1000);

updatepeakRate();
updateButtonState();


        // Tutaj możesz dodać kod, który ma się wykonać po kliknięciu na królika
rabbit.addEventListener('click', () => {
        
    score += clickPower;
    scoreDisplay.innerText = "Punkty: " + score;
    localStorage.setItem('score', score);
    updatepeakRate();
    updateButtonState();
    updateCount();
    updateWholeCount();

});



clickPrize1.addEventListener('click', () => {

        if (score >= requiredScore) {
            clickPower++;
            score -= requiredScore;  // Odejmij wymaganą ilość punktów
            scoreDisplay.innerText = "Punkty: " + score;
            clickPowerDisplay.innerHTML = clickPower;
            localStorage.setItem('score', score);
            localStorage.setItem('clickPower', clickPower);
            updatepeakRate();
            updateButtonState();
        }
    }
);

clickPrize2.addEventListener('click', () => {
        if (score >= requiredScore2) {
            clickPower += 25;
            score -= requiredScore2;  // Odejmij wymaganą ilość punktów
            scoreDisplay.innerText = "Punkty: " + score;
            clickPowerDisplay.innerHTML = clickPower;
            localStorage.setItem('score', score);
            localStorage.setItem('clickPower', clickPower);
            updatepeakRate();
            updateButtonState();
        }
    }
);

clickPrize3.addEventListener('click', () => {
        if (score >= requiredScore3) {
            clickPower += 200;
            score -= requiredScore3;  // Odejmij wymaganą ilość punktów
            scoreDisplay.innerText = "Punkty: " + score;
            clickPowerDisplay.innerHTML = clickPower;
            localStorage.setItem('score', score);
            localStorage.setItem('clickPower', clickPower);
            updatepeakRate();
            updateButtonState();
        }
    }
);

clickPrize4.addEventListener('click', () => {
    if (score >= requiredScore4) {
        clickPower += 1000;
            score -= requiredScore4;  // Odejmij wymaganą ilość punktów
            scoreDisplay.innerText = "Punkty: " + score;
            clickPowerDisplay.innerHTML = clickPower;
            localStorage.setItem('score', score);
            localStorage.setItem('clickPower', clickPower);
            updatepeakRate();
            updateButtonState();
        }
    }
);

buttonPerSec1.addEventListener('click', () => {
    if (score >= requiredScorePerSec1) {
        pointsPerSecond += 1;
        score -= requiredScorePerSec1;  // Odejmij wymaganą ilość punktów
        scoreDisplay.innerText = "Punkty: " + score;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerSecond', pointsPerSecond);
        updatepeakRate();
        updateButtonState();
    }
}    
);

buttonPerSec2.addEventListener('click', () => {
    if (score >= requiredScorePerSec2) {
        pointsPerSecond += 20;
        score -= requiredScorePerSec2;  // Odejmij wymaganą ilość punktów
        scoreDisplay.innerText = "Punkty: " + score;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerSecond', pointsPerSecond);
        updatepeakRate();
        updateButtonState();
    }
}    
);

buttonPerSec3.addEventListener('click', () => {
    if (score >= requiredScorePerSec3) {
        pointsPerSecond += 50;
        score -= requiredScorePerSec3;  // Odejmij wymaganą ilość punktów
        scoreDisplay.innerText = "Punkty: " + score;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerSecond', pointsPerSecond);
        updatepeakRate();
        updateButtonState();
    }
}    
);

buttonPerSec4.addEventListener('click', () => {
    if (score >= requiredScorePerSec4) {
        pointsPerSecond += 200;
        score -= requiredScorePerSec4;  // Odejmij wymaganą ilość punktów
        scoreDisplay.innerText = "Punkty: " + score;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerSecond', pointsPerSecond);
        updatepeakRate();
        updateButtonState();
    }
}
);