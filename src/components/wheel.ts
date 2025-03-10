import createElement from '../create/create_element';
import drawBigCircle from '../wheel/draw_big_circle';
import drawCursor from '../wheel/draw_cursor';
import drawSmallCircle from '../wheel/draw_small_circle';

function createWheel(): HTMLCanvasElement {
  const canvas = createElement({ tag: 'canvas', classes: ['wheel-canvas'] }) as HTMLCanvasElement;
  canvas.width = 512;
  canvas.height = 512;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  if (ctx !== null) {
    drawBigCircle(ctx);
    drawSmallCircle(ctx);
    drawCursor(ctx);
  }
  return canvas;
}

export default createWheel;
