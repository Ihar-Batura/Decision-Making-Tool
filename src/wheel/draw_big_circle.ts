import { center, bigCircleRadius, lineWidth } from './wheel_variables';

function drawBigCircle(ctx: CanvasRenderingContext2D): void {
  // Big Circle
  ctx.beginPath();
  ctx.arc(center.x, center.y, bigCircleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = '#b653ed';
  ctx.fill();

  // Big Circle border
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#dad5ef';
  ctx.stroke();
}

export default drawBigCircle;
