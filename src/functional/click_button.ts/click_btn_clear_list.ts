import saveOptionsListToLS from '../local_storage/save_options_list_to_LS';
import reloadMainOnPageListOfOptions from '../reload_page/reload_main_on_page_list_of_options';

function clickBtnClearList(): void {
  saveOptionsListToLS({ list: [], lastId: 0 });
  reloadMainOnPageListOfOptions();
}

export default clickBtnClearList;
