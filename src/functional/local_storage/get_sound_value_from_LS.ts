import { ISound } from '../../types/types';

function getSoundValueFromLS(): ISound | null {
  const soundValue: string | null = localStorage.getItem('SoundValueDMT');
  if (soundValue !== null) {
    const value: ISound = JSON.parse(soundValue);
    return value;
  }
  return null;
}

export default getSoundValueFromLS;
