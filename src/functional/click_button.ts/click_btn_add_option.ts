import addNewOption from '../work_with_options/add_new_option';
import reloadMainOnPageListOfOptions from '../reload_page/reload_main_on_page_list_of_options';

function clickBtnAddOption(): void {
  addNewOption();
  reloadMainOnPageListOfOptions();
}

export default clickBtnAddOption;
