const form = document.querySelector('.form');
let formData = {};
let delay = 0;
let step = 0;
let amount = 0;

form.addEventListener('input', onInput);
form.addEventListener('submit', createPromise);

function onInput(event) {
  event.preventDefault;
  formData[event.target.name] = event.target.value;
  // console.log(event.target.value);

  delay = formData.delay;
  step = formData.step;
  amount = formData.amount;
}

for (let index = 0; (index = amount); index += 1) {
  setTimeout(() => {
    function createPromise(position, delay) {
      console.log(index);
      const shouldResolve = Math.random() > 0.3;
      console.log(shouldResolve);
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }
  }, delay);
}
