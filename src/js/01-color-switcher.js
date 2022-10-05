
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.classList.add('button',);
refs.stopBtn.classList.add('button');

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

const TIME_INTERVAL = 1000;
let intervalId = null;

function onClickStartBtn() {
    refs.startBtn.setAttribute('disabled', true);
        intervalId = setInterval(() => {
          document.body.style.backgroundColor = getRandomHexColor();
        }, TIME_INTERVAL);
}

function onClickStopBtn() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




















// let isBtnActive = false;

// function onClickStartBtn() {
//     if (isBtnActive) {
//         return;
//     }
//       intervalId = setInterval(() => {
//       document.body.style.backgroundColor = getRandomHexColor();
//       }, 500);

//     isBtnActive = true;
// }

// function onClickStopBtn() {
//     clearInterval(intervalId);
//     isBtnActive = false;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }