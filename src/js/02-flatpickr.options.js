import { refs } from './02-timer'
import Notiflix from 'notiflix';

export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }
    refs.button.removeAttribute('disabled');
  },
};