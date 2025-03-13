import { ICreateTextAreaElement } from '../types/types';

function createTextAreaElement(options: ICreateTextAreaElement): HTMLTextAreaElement {
  const { classes = [], id, row, parent } = options;

  const element = document.createElement('textarea');

  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.id = id;
  }
  if (row) {
    element.setAttribute('row', row);
  }
  if (parent != null) {
    parent.append(element);
  }

  return element;
}

export default createTextAreaElement;
