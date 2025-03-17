import { ISound } from '../../types/types';
import getSoundValueFromLS from '../local_storage/get_sound_value_from_LS';

function isSoundMute(btn: HTMLButtonElement): void {
  const soundFromLS: ISound | null = getSoundValueFromLS();
  if (soundFromLS !== null) {
    if (soundFromLS.sound === false) {
      btn.classList.add('mute');
    } else {
      btn.classList.remove('mute');
    }
  }
}

export default isSoundMute;
