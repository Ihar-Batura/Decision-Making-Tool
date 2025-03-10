import getRandomNumber from './get_random_number';

function getRandomHexColor(): string {
  const arr: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  let color: string = '#';

  for (let i = 0; i < 6; i += 1) {
    const numberOfArr: number = getRandomNumber(0, 15);
    color += arr[numberOfArr];
  }

  return color;
}

export default getRandomHexColor;
