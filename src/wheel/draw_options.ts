import { center, bigCircleRadius, lineWidth } from './wheel_variables';
import { IOption } from '../types/types';
import drawText from './draw_text';

function drawOptions(
  ctx: CanvasRenderingContext2D,
  mixArrOptions: IOption[],
  arrOptionColors: string[],
  offsetAngle: number,
  pickedOption?: HTMLElement
): void {
  const arrOptions: IOption[] = mixArrOptions;

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

    const startAngle: number = Math.PI * 2 * startPercent + offsetAngle;
    const endAngle: number = Math.PI * 2 * endPercent + offsetAngle;

    startPercent = endPercent;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, bigCircleRadius - lineWidth, startAngle, endAngle);

    const color: string = arrOptionColors[i];
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#dad5ef';
    ctx.stroke();

    // Check corner size and draw option title
    const cornerSize: number = endAngle - startAngle;

    if (cornerSize >= 0.185) {
      const title: string = arrOptions[i].title;
      drawText(ctx, title, startAngle, endAngle);
    }

    if (pickedOption) {
      const circle: number = 6.283185307179586;
      const winPosition: number = 4.71238898038469;

      if (startAngle % circle <= winPosition && endAngle % circle >= winPosition) {
        pickedOption.textContent = arrOptions[i].title;
      }
    }
  }
}

export default drawOptions;
