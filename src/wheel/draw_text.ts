import { center } from './wheel_variables';

function drawText(
  ctx: CanvasRenderingContext2D,
  title: string,
  startAngle: number,
  endAngle: number
): void {
  const optionTitle: string = title.length < 12 ? title : `${title.slice(0, 12)}...`;

  ctx.save();
  ctx.translate(center.x, center.y);
  ctx.rotate((startAngle + endAngle) / 2);
  ctx.textAlign = 'start';
  ctx.font = '16px Merienda';
  ctx.fillStyle = '#fafcfd';

  ctx.shadowColor = 'black';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  ctx.fillText(optionTitle, 90, 5);
  ctx.restore();
}

export default drawText;
