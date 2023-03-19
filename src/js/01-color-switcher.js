const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyStyle: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;
let disabled = true;

function onStartBtnClick(event) {
  if (!disabled) {
    return;
  }

  disabled = false;

  timerId = setInterval(() => {
    refs.bodyStyle.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick(event) {
  clearInterval(timerId);
  disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
