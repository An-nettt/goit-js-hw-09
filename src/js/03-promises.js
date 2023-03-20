const form = document.querySelector('.feedback-form');

form.addEventListener('submit', createPromise);

let formData = {};

form.addEventListener('input', onInput);

function onInput(event) {
  formData[event.target.name] = event.target.value;

  let delay = formData.delay;
  return formData.step;
  return formData.amount;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve('Success! Value passed to resolve function');
  } else {
    reject('Error! Error passed to reject function');
  }
}
