import { ICreateCanvasElement } from '../types/types';

function createCanvasElement(options: ICreateCanvasElement): HTMLCanvasElement {
  const { classes = [], id, width = 300, height = 150, parent } = options;

  const element = document.createElement('canvas');

  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (width) {
    element.width = width;
  }
  if (height) {
    element.height = height;
  }
  if (id) {
    element.id = id;
  }
  if (parent != null) {
    parent.append(element);
  }

  return element;
}

export default createCanvasElement;
