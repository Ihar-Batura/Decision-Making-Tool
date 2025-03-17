import { IOptions, IOption } from '../../types/types';
import getOptionsListFromLS from '../local_storage/get_options_list_from_LS';
import saveOptionsListToLS from '../local_storage/save_options_list_to_LS';
import reloadMainOnPageListOfOptions from '../reload_page/reload_main_on_page_list_of_options';

function clickBtnDeleteOption(element: HTMLElement): void {
  const id: string | null = element.textContent;
  if (id !== null) {
    const optionsList: IOptions | null = getOptionsListFromLS();
    if (optionsList !== null) {
      const filterOptionsList: IOption[] = optionsList.list.filter((el) => el.id !== id);
      saveOptionsListToLS({ list: filterOptionsList, lastId: optionsList.lastId });
      reloadMainOnPageListOfOptions();
    }
  }
}

export default clickBtnDeleteOption;
