import createCanvasElement from '../create/create_canvas';
import drawBigCircle from '../wheel/draw_big_circle';
import drawCursor from '../wheel/draw_cursor';
import drawSmallCircle from '../wheel/draw_small_circle';
import drawOptions from '../wheel/draw_options';

function createWheel(): HTMLCanvasElement {
  const canvas: HTMLCanvasElement = createCanvasElement({
    classes: ['wheel-canvas'],
    width: 512,
    height: 512,
  });

  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  if (ctx !== null) {
    drawBigCircle(ctx);
    drawOptions(ctx);
    drawSmallCircle(ctx);
    drawCursor(ctx);
  }
  return canvas;
}

export default createWheel;
