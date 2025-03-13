import { ICreateCanvasElement } from '../types/types';

function createCanvasElement(options: ICreateCanvasElement): HTMLCanvasElement {
  const { classes = [], id, width = 300, height = 150, parent } = options;

  const canvas: HTMLCanvasElement = document.createElement('canvas');

  if (classes.length > 0) {
    canvas.classList.add(...classes);
  }
  if (width) {
    canvas.width = width;
  }
  if (height) {
    canvas.height = height;
  }
  if (id) {
    canvas.id = id;
  }
  if (parent != null) {
    parent.append(canvas);
  }

  return canvas;
}

export default createCanvasElement;
