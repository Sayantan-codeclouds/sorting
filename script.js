let array = [];
const arrayContainer = document.getElementById('array-container');

function generateArray() {
    array = [];
    arrayContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);
        const bar = document.createElement('div');
        bar.style.height = `${value * 3}px`;
        bar.classList.add('bar');
        arrayContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';
            if (array[j] > array[j + 1]) {
                await swap(bars[j], bars[j + 1]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            bars[j].style.backgroundColor = '#61dafb';
            bars[j + 1].style.backgroundColor = '#61dafb';
        }
        bars[array.length - 1 - i].style.backgroundColor = 'green';
    }
    bars[0].style.backgroundColor = 'green';
}

function swap(bar1, bar2) {
    return new Promise(resolve => {
        const temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                resolve();
            }, 100);
        });
    });
}

generateArray();
