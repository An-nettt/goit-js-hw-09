import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

refs.startBtn.disabled = true;

const fp = flatpickr(
  refs.myInput,
  (options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // isActive = false;
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        console.log('не то');
        refs.startBtn.disabled = true;
        // Notiflix.Notify.failure('Please choose a date in the future');
        window.alert('Please choose a date in the future');
      } else {
        refs.startBtn.disabled = false;
      }
    },
  })
);

// refs.startBtn.addEventListener('click', onStartBtnClick);

// let timerInput = refs.myInput.value;

// setTimeout(() => {
//   localStorage.setItem('timerInput', refs.myInput.value);
// }, 3000);

// function onStartBtnClick(event) {
//   console.log('click');

//   console.log(localStorage.getItem('timerInput'));
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
