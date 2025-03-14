import getRandomHexColor from './get_random_hex_color';

function getArrRandomOptionColors(length: number): string[] {
  const arrColors: string[] = [];

  for (let i = 0; i < length; i += 1) {
    const color: string = getRandomHexColor();
    arrColors.push(color);
  }

  return arrColors;
}

export default getArrRandomOptionColors;
