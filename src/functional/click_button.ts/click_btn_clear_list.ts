import saveOptionsListToLS from '../local_storage/save_options_list_to_LS';
import cleanMain from '../clean_element_or_page/clean_main';
import createPageListOfOptions from '../../pages/page_list_of_options';
import { main } from '../../main';

function clickBtnClearList(): void {
  saveOptionsListToLS({ list: [], lastId: 0 });
  cleanMain();
  const pageListOfOptions: HTMLElement = createPageListOfOptions();
  main.append(pageListOfOptions);
}

export default clickBtnClearList;
