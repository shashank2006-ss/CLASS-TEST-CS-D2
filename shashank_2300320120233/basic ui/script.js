
const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');
const doneButton = document.getElementById('doneButton');
const numBulbsInput = document.getElementById('numBulbs');
const bulbContainer = document.getElementById('bulbContainer');
const resetButton = document.getElementById('resetButton');

const bulbOff = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
const bulbOn = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png';

startButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

doneButton.addEventListener('click', () => {
    const n = parseInt(numBulbsInput.value);
    bulbContainer.innerHTML = '';
    for (let i = 0; i < n; i++) {
        const bulb = document.createElement('img');
        bulb.src = bulbOff;
        bulb.classList.add('bulb');
        bulb.addEventListener('click', () => {
            bulb.src = bulb.src === bulbOff ? bulbOn : bulbOff;
            if (bulb.src === bulbOn) {
                setTimeout(() => {
                    bulb.src = bulbOff;
                }, 10000); // 10000 milliseconds = 10 seconds
            }
        
        });
        bulbContainer.appendChild(bulb);
    }
    modal.style.display = 'none';
    resetButton.classList.remove('hidden');
    
});

resetButton.addEventListener('click', () => {
    location.reload();
});