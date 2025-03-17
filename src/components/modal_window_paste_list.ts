import createElement from '../create/create_element';
import createDialogElement from '../create/create_dialog';
import createTextAreaElement from '../create/create_textarea';
import createButton from '../create/create_button';
import clickBtnCancel from '../functional/click_button.ts/click_btn_cancel';
import clickBtnConfirm from '../functional/click_button.ts/click_btn_confirm';

function createModalWindowPasteList(): HTMLDialogElement {
  const dialogWindow: HTMLDialogElement = createDialogElement({
    classes: ['modal-window'],
  });

  const form: HTMLElement = createElement({ tag: 'form', classes: ['form'], parent: dialogWindow });
  const textField: HTMLTextAreaElement = createTextAreaElement({
    classes: ['form-field'],
    row: '8',
    parent: form,
  });

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
    clickBtnCancel(dialogWindow); // Close modal window
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      clickBtnCancel(dialogWindow);
    }
  });

  document.addEventListener('click', (event: MouseEvent) => {
    const target: EventTarget | null = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const element: HTMLElement = target;
    if (element.classList.contains('modal-window')) {
      clickBtnCancel(dialogWindow);
    }
  });

  return dialogWindow;
}

export default createModalWindowPasteList;
