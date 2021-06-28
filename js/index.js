const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyBgColour: document.querySelector('body'),
};

let switcherId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    switcherId = setInterval(() => {
        let randomBg = randomIntegerFromInterval(0, colors.length - 1);
        refs.bodyBgColour.style.backgroundColor = colors[randomBg];
    }, 1000)
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(switcherId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
})