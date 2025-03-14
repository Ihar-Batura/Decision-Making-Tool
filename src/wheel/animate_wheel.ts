import { IOption } from '../types/types';
import drawBigCircle from './draw_big_circle';
import drawOptions from './draw_options';
import drawSmallCircle from './draw_small_circle';
import drawCursor from './draw_cursor';

function animateWheel(
  ctx: CanvasRenderingContext2D,
  mixArrOptions: IOption[],
  arrOptionColors: string[],
  input: HTMLInputElement,
  pickedOption: HTMLElement
): void {
  pickedOption.classList.remove('winner');
  const inputValue: string = input.value;
  const time: number = +inputValue * 1000;
  let speed: number = 0.01;
  let step: number = 0.05;

  function animate(): void {
    if (speed !== 0) {
      speed += step;
      const offsetAngle: number = speed;

      drawBigCircle(ctx);
      drawOptions(ctx, mixArrOptions, arrOptionColors, offsetAngle, pickedOption);
      drawSmallCircle(ctx);
      drawCursor(ctx);

      requestAnimationFrame(animate);
    }
  }
  animate();

  // Ускорение пока сделал так
  setTimeout(() => {
    if (Math.random() > 0.5) {
      step = 0.2;
    } else {
      step = 0.25;
    }
  }, time / 5);

  setTimeout(() => {
    if (Math.random() > 0.5) {
      step = 0.4;
    } else {
      step = 0.35;
    }
  }, time / 2);

  setTimeout(() => {
    if (Math.random() > 0.5) {
      step = 0.15;
    } else {
      step = 0.1;
    }
  }, time - 1500);

  // Stop animation
  setTimeout(() => {
    speed = 0;
    pickedOption.classList.add('winner');
  }, time);
}

export default animateWheel;
