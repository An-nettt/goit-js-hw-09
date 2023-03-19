import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // if (selectedDates) {
    //   window.alert('Please choose a date in the future');
    // }
    console.log(selectedDates[0]);
  },
};

const myInput = document.querySelector('#datetime-picker');
const fp = flatpickr(myInput, { options });
