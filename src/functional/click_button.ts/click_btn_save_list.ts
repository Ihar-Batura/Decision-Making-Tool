import getOptionsListFromLS from '../local_storage/get_options_list_from_LS';
import { IOptions } from '../../types/types';

function clickBtnSaveList(): void {
  const optionList: IOptions | null = getOptionsListFromLS();

  if (optionList !== null) {
    const link: HTMLAnchorElement = document.createElement('a');
    const file: Blob = new Blob([JSON.stringify(optionList)], { type: 'application/json' });
    link.href = URL.createObjectURL(file);
    link.download = 'option-list.json';
    link.click();
  }
}

export default clickBtnSaveList;
