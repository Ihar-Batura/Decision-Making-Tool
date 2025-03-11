import { ISound } from '../../types/types';

function saveSoundValueToLS({ sound }: ISound): void {
  const data = { sound: sound };

  localStorage.setItem('SoundValueDMT', JSON.stringify(data));
}

export default saveSoundValueToLS;
