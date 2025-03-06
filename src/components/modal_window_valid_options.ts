import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnCancel from '../functional/click_button.ts/click_btn_cancel';

function createModalWindowValidOptions(): HTMLDialogElement {
  const dialogWindow: HTMLDialogElement = createElement({
    tag: 'dialog',
    classes: ['modal-window', 'modal-valid-options'],
  }) as HTMLDialogElement;

  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['modal-valid-options-container'],
    parent: dialogWindow,
  });

  const message: HTMLElement = createElement({
    tag: 'div',
    classes: ['modal-valid-options-message'],
    text: `Please add at least 2 valid options. An option is considered valid if its title is not empty and its weight is greater than 0`,
    parent: container,
  });

  const btnCancel: HTMLButtonElement = createButton({
    classes: ['btn', 'btn-close'],
    text: 'Close',
    parent: container,
  });

  btnCancel.addEventListener('click', function (e) {
    e.preventDefault();
    clickBtnCancel(dialogWindow);
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      clickBtnCancel(dialogWindow);
    }
  });

  document.addEventListener('click', (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('modal-window')) {
      clickBtnCancel(dialogWindow);
    }
  });

  return dialogWindow;
}

export default createModalWindowValidOptions;
