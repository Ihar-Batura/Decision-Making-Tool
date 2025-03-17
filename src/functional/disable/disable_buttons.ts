import { IDisabledButtons } from '../../types/types';
import playSound from '../sound/play_sound';

function disableButtons({
  btnBack: btnBack,
  btnSound: btnSound,
  btnStart: btnStart,
  timerInput: timerInput,
  timerImg: timerImg,
  timerTime: timerTime,
}: IDisabledButtons): void {
  btnBack.setAttribute('disabled', ' ');
  btnSound.setAttribute('disabled', ' ');
  btnStart.setAttribute('disabled', ' ');
  timerInput.setAttribute('disabled', ' ');
  timerImg.setAttribute('disabled', ' ');

  setTimeout(() => {
    btnBack.removeAttribute('disabled');
    btnSound.removeAttribute('disabled');
    btnStart.removeAttribute('disabled');
    timerInput.removeAttribute('disabled');
    timerImg.removeAttribute('disabled');
    playSound();
  }, timerTime * 1000);
}

export default disableButtons;
