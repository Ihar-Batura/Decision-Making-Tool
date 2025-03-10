import { center, smallCircleRadius, lineWidth } from './wheel_variables';

function drawSmallCircle(ctx: CanvasRenderingContext2D): void {
  // Small Circle
  ctx.beginPath();
  ctx.arc(center.x, center.y, smallCircleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = '#532d68';
  ctx.fill();

  //Small Circle border
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#dad5ef';
  ctx.stroke();
}

export default drawSmallCircle;
