import { center, bigCircleRadius, lineWidth } from './wheel_variables';
import findValidOptions from '../functional/work_with_options/find_valid_options';
import { IOption } from '../types/types';
import getRandomHexColor from '../functional/random/get_random_hex_color';

function drawOptions(ctx: CanvasRenderingContext2D): void {
  const arrOptions: IOption[] = findValidOptions();

  let allWeight: number = 0;

  arrOptions.forEach((option) => {
    allWeight += +option.weight;
  });

  let startPercent: number = 0;
  let endPercent: number = 0;

  for (let i = 0; i < arrOptions.length; i += 1) {
    const optionWeight: number = +arrOptions[i].weight;
    const optionPercent: number = optionWeight / allWeight;

    endPercent += optionPercent;

    const startAngle: number = Math.PI * 2 * startPercent;
    const endAngle: number = Math.PI * 2 * endPercent;

    startPercent = endPercent;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, bigCircleRadius - lineWidth, startAngle, endAngle);

    const color: string = getRandomHexColor();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#dad5ef';
    ctx.stroke();
    console.log('draw');
  }
}

export default drawOptions;
