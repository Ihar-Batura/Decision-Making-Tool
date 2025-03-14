import createCanvasElement from '../create/create_canvas';
import drawBigCircle from '../wheel/draw_big_circle';
import drawCursor from '../wheel/draw_cursor';
import drawSmallCircle from '../wheel/draw_small_circle';
import drawOptions from '../wheel/draw_options';
import { IOption } from '../types/types';
import animateWheel from '../wheel/animate_wheel';

function createWheel(
  mixArrOptions: IOption[],
  arrOptionColors: string[],
  btnStart: HTMLButtonElement,
  input: HTMLInputElement,
  pickedOption: HTMLElement
): HTMLCanvasElement {
  const canvas: HTMLCanvasElement = createCanvasElement({
    classes: ['wheel-canvas'],
    width: 512,
    height: 512,
  });

  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
  const offsetAngle: number = 0;

  if (ctx !== null) {
    drawBigCircle(ctx);
    drawOptions(ctx, mixArrOptions, arrOptionColors, offsetAngle);
    drawSmallCircle(ctx);
    drawCursor(ctx);

    if (btnStart !== null && input !== null) {
      btnStart.addEventListener('click', (event) => {
        event.preventDefault();
        const time: number = +input.value;
        if (time >= 5) {
          animateWheel(ctx, mixArrOptions, arrOptionColors, input, pickedOption);
        }
      });
    }
  }
  return canvas;
}

export default createWheel;
