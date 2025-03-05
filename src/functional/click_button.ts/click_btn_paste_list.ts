import createModalWindow from '../../components/modal_window';
import { body } from '../../main';

function clickBtnPasteList(): void {
  const dialog: HTMLDialogElement = createModalWindow();
  body.append(dialog);

  dialog.showModal();
}

export default clickBtnPasteList;
