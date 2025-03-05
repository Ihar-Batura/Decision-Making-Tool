import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnCancel from '../functional/click_button.ts/click_btn_cancel';
import clickBtnConfirm from '../functional/click_button.ts/click_btn_confirm';

function createModalWindow(): HTMLDialogElement {
  const dialogWindow: HTMLDialogElement = createElement({
    tag: 'dialog',
    classes: ['modal-window'],
  }) as HTMLDialogElement;

  const form: HTMLElement = createElement({ tag: 'form', classes: ['form'], parent: dialogWindow });
  const textField: HTMLTextAreaElement = createElement({
    tag: 'textarea',
    classes: ['form-field'],
    parent: form,
  }) as HTMLTextAreaElement;
  textField.setAttribute('rows', '8');

  const placeholder: string = `Paste a list of new options in a CSV-like format:

Title,1                 -> | Title                 | 1 |
Title with whitespace,2 -> | Title with whitespace | 2 |
Title , with , commas,3 -> | Title , with , commas | 3 |
Title with "quotes",4   -> | Title with "quotes"   | 4 |
Title with number 1,5   -> | Title with number 1   | 5 |`;

  textField.setAttribute('placeholder', placeholder);

  const btnCancel: HTMLButtonElement = createButton({
    classes: ['btn', 'form-btn', 'form-btn-cancel'],
    text: 'Cancel',
    parent: form,
  });

  btnCancel.addEventListener('click', function (e) {
    e.preventDefault();
    clickBtnCancel(dialogWindow);
  });

  const btnConfirm: HTMLButtonElement = createButton({
    classes: ['btn', 'form-btn', 'form-btn-confirm'],
    text: 'Confirm',
    parent: form,
  });

  btnConfirm.addEventListener('click', function (e) {
    e.preventDefault();
    clickBtnConfirm(textField.value);
  });

  dialogWindow.showModal;

  return dialogWindow;
}

export default createModalWindow;
