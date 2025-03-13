import { ICreateTextAreaElement } from '../types/types';

function createTextAreaElement(options: ICreateTextAreaElement): HTMLTextAreaElement {
  const { classes = [], id, row, parent } = options;

  const textarea: HTMLTextAreaElement = document.createElement('textarea');

  if (classes.length > 0) {
    textarea.classList.add(...classes);
  }
  if (id) {
    textarea.id = id;
  }
  if (row) {
    textarea.setAttribute('row', row);
  }
  if (parent != null) {
    parent.append(textarea);
  }

  return textarea;
}

export default createTextAreaElement;
