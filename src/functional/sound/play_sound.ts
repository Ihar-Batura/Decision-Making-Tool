import soundWin from '/win.wav';
import getSoundValueFromLS from '../local_storage/get_sound_value_from_LS';
import { ISound } from '../../types/types';

function playSound(): void {
  const soundValue: ISound | null = getSoundValueFromLS();

  if (soundValue !== null) {
    if (soundValue.sound === true) {
      const audio: HTMLAudioElement = new Audio(soundWin);
      audio.currentTime = 0;
      audio.play();
    }
  }
}

export default playSound;
