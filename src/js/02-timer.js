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
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.startBtn.disabled = true;

const fp = flatpickr(
  refs.myInput,
  (options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= today) {
        refs.startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
        // window.alert('Please choose a date in the future');
      } else {
        refs.startBtn.disabled = false;
        selectedDate = selectedDates[0];
      }
    },
  })
);

function onStartBtnClick(event) {
  timerId = setInterval(() => {
    const deltaTime = selectedDate.getTime() - Date.now();
    if (deltaTime <= 0) {
      clearInterval(timerId);
      return;
    }
    const timer = convertMs(deltaTime);
    refs.days.textContent = timer.days;
    refs.hours.textContent = timer.hours;
    refs.minutes.textContent = timer.minutes;
    refs.seconds.textContent = timer.seconds;
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
