import { body } from '../../main';

function clickBtnCancel(dialogWindow: HTMLDialogElement): void {
  dialogWindow.close();
  body.removeChild(dialogWindow);
}

export default clickBtnCancel;
