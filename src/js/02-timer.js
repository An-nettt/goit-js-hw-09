import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let today = new Date();
let selectedDate;

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.startBtn.disabled = true;
refs.days = 45;

const fp = flatpickr(
  refs.myInput,
  (options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // isActive = false;
    onClose(selectedDates) {
      if (selectedDates[0] < today) {
        console.log('не то');
        refs.startBtn.disabled = true;
        // Notiflix.Notify.failure('Please choose a date in the future');
        window.alert('Please choose a date in the future');
      } else {
        refs.startBtn.disabled = false;
        selectedDate = selectedDates[0];
      }
    },
  })
);

function onStartBtnClick(event) {
  setInterval(() => {
    let deltaTime = selectedDate.getTime() - Date.now();
    // console.log(deltaTime);
    let delta = convertMs(deltaTime);
    console.log(delta);
    refs.days = delta.days;
    refs.hours = delta.hours;
    refs.minutes = delta.minutes;
    refs.seconds = delta.seconds;
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
