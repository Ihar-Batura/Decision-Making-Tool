import { center, lineWidth } from './wheel_variables';

function drawCursor(ctx: CanvasRenderingContext2D): void {
  // Cursor
  ctx.beginPath();
  ctx.moveTo(272, 0);
  ctx.lineTo(center.x, 35);
  ctx.lineTo(240, 0);
  ctx.lineTo(center.x, 8);
  ctx.lineTo(272, 0);
  ctx.fillStyle = 'red';
  ctx.fill();

  //Cursor  border
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#dad5ef';
  ctx.stroke();
}

export default drawCursor;
