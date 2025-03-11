import getSoundValueFromLS from './get_sound_value_from_LS';
import saveSoundValueToLS from './save_sound_value_to_LS';
import { ISound } from '../../types/types';

function checkSoundValueInLS(): void {
  const value = getSoundValueFromLS();
  if (value === null) {
    const soundValue: ISound = {
      sound: true,
    };
    saveSoundValueToLS(soundValue);
  }
}

export default checkSoundValueInLS;
