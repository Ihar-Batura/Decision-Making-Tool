import { ICreateDialogElement } from '../types/types';

function createDialogElement(options: ICreateDialogElement): HTMLDialogElement {
  const { classes = [], id, parent } = options;

  const element = document.createElement('dialog');

  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.id = id;
  }
  if (parent != null) {
    parent.append(element);
  }

  return element;
}

export default createDialogElement;
