import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let formData = {};
let delay;
let step;
let amount;

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
  let nextDelay = delay - step;

  for (let index = 1; index <= amount; index += 1) {
    const position = index;

    console.log(nextDelay);

    createPromise(position, nextDelay)
      .then(() => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${nextDelay}ms`
        );
        console.log(nextDelay);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(() => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${nextDelay}ms`
        );
        console.log(nextDelay);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    nextDelay += step;
  }
}

const createPromise = (position, nextDelay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, nextDelay);
      } else {
        reject(position, nextDelay);
      }
    }, nextDelay);
    // console.log(nextDelay);
  });
};
