import addNewOption from '../work_with_options/add_new_option';
import cleanMain from '../clean_element_or_page/clean_main';
import createPageListOfOptions from '../../pages/page_list_of_options';
import { main } from '../../main';

function clickBtnAddOption(): void {
  addNewOption();
  cleanMain();
  const pageListOfOptions: HTMLElement = createPageListOfOptions();
  main.append(pageListOfOptions);
}

export default clickBtnAddOption;
