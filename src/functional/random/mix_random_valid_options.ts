import { IOption } from '../../types/types';
import getRandomNumber from './get_random_number';

function mixRandomValidOptions(arrOptions: IOption[]): IOption[] {
  const randomOptions: IOption[] = [];
  const wasNumber: number[] = [];
  const optionsLength: number = arrOptions.length;

  for (let i = 0; i < optionsLength; i += 1) {
    const randomNumber: number = getRandomNumber(0, optionsLength);
    if (!wasNumber.includes(randomNumber)) {
      wasNumber.push(randomNumber);
      randomOptions.push(arrOptions[randomNumber]);
    } else {
      i--;
    }
  }

  return randomOptions;
}

export default mixRandomValidOptions;
