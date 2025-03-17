import { body } from '../../main';

function clickBtnCancel(dialogWindow: HTMLDialogElement): void {
  dialogWindow.close();
  // Add a check to eliminate errors when pressing the Esc button
  body.childNodes.forEach((el) => {
    if (el === dialogWindow) {
      body.removeChild(dialogWindow);
    }
  });
}

export default clickBtnCancel;
