import addNewOption from '../work_with_options/add_new_option';
import cleanMainWrapper from '../clean_element_or_page/clean_main_wrapper';
import addListOfOptionsAndButtons from '../work_with_page_elements/add_list_of_options_and_buttons';

function clickBtnAddOption(): void {
  addNewOption();
  cleanMainWrapper();
  addListOfOptionsAndButtons();
}

export default clickBtnAddOption;
