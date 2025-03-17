import createModalWindowPasteList from '../../components/modal_window_paste_list';
import { body } from '../../main';

function clickBtnPasteList(): void {
  const dialog: HTMLDialogElement = createModalWindowPasteList();
  body.append(dialog);

  dialog.showModal();
}

export default clickBtnPasteList;
