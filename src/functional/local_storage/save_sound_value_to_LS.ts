import { ISound } from '../../types/types';

function saveSoundValueToLS({ sound }: ISound): void {
  const data: ISound = { sound: sound };

  localStorage.setItem('SoundValueDMT', JSON.stringify(data));
}

export default saveSoundValueToLS;
