import createElement from '../create/create_element';
import findValidOptions from '../functional/work_with_options/find_valid_options';

function createWheel(): HTMLCanvasElement {
  const canvas = createElement({ tag: 'canvas', classes: ['wheel-canvas'] }) as HTMLCanvasElement;
  canvas.width = 512;
  canvas.height = 512;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (ctx !== null) {
    // Big Circle
    ctx.beginPath();
    ctx.arc(256, 256, 246, 0, 2 * Math.PI);
    ctx.fillStyle = '#b653ed';
    ctx.fill();

    // Big Circle border
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#dad5ef';
    ctx.stroke();

    // Small Circle
    ctx.beginPath();
    ctx.arc(256, 256, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#532d68';
    ctx.fill();

    //Small Circle border
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#dad5ef';
    ctx.stroke();

    // Triangle
    ctx.beginPath();
    ctx.moveTo(272, 0);
    ctx.lineTo(256, 35);
    ctx.lineTo(240, 0);
    ctx.lineTo(256, 8);
    ctx.lineTo(272, 0);
    ctx.fillStyle = 'red';
    ctx.fill();

    //Triangle border
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#dad5ef';
    ctx.stroke();
  }
  return canvas;
}

export default createWheel;
