import getSoundValueFromLS from '../local_storage/get_sound_value_from_LS';
import saveSoundValueToLS from '../local_storage/save_sound_value_to_LS';
import { ISound } from '../../types/types';

function clickBtnSound(btn: HTMLButtonElement): void {
  btn.classList.toggle('mute');

  const soundValue: ISound | null = getSoundValueFromLS();

  if (soundValue !== null) {
    if (btn.classList.contains('mute')) {
      saveSoundValueToLS({ sound: false });
    } else {
      saveSoundValueToLS({ sound: true });
    }
  }
}

export default clickBtnSound;
