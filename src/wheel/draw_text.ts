import { center } from './wheel_variables';

function drawText(
  ctx: CanvasRenderingContext2D,
  title: string,
  startAngle: number,
  endAngle: number
): void {
  ctx.save();
  ctx.translate(center.x, center.y);
  ctx.rotate((startAngle + endAngle) / 2);
  ctx.textAlign = 'start';
  ctx.font = '18px Merienda';
  ctx.fillStyle = '#fafcfd';

  ctx.shadowColor = 'black';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  ctx.fillText(title, 70, 0);
  ctx.restore();
}

export default drawText;
