import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let formData = {};
let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

form.addEventListener('input', onInputClick);
form.addEventListener('submit', onSubmitClick);

function onInputClick(event) {
  formData[event.target.name] = event.target.value;
  // console.log(event.target.value);

  delay = Number(formData.delay);
  step = Number(formData.step);
  amount = Number(formData.amount);
}

function onSubmitClick(event) {
  event.preventDefault();
  let nextDelay = delay;

  for (let index = 1; index <= amount; index += 1) {
    const position = index;

    createPromise(position, nextDelay)
      .then((position, nextDelay) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${nextDelay}ms`
        );
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch((position, nextDelay) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${nextDelay}ms`
        );
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    nextDelay += step;
    console.log(nextDelay);
  }
}

function createPromise(position, nextDelay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, nextDelay);
      } else {
        reject(position, nextDelay);
      }
    }, delay);
  });
}
