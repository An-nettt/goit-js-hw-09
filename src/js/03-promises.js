import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();

  const delayValue = Number(form.elements.delay.value);
  const stepValue = Number(form.elements.step.value);
  const amountValue = Number(form.elements.amount.value);

  let nextDelay = delayValue;

  for (let index = 1; index <= amountValue; index += 1) {
    const position = index;

    createPromise(position, nextDelay)
      .then(({ position, nextDelay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${nextDelay}ms`
        );
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, nextDelay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${nextDelay}ms`
        );
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    nextDelay += stepValue;
  }
}

const createPromise = (position, nextDelay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, nextDelay });
      } else {
        reject({ position, nextDelay });
      }
    }, nextDelay);
  });
};
