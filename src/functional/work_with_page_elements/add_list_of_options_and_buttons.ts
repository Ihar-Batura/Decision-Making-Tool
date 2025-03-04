import createListOfOptions from '../../components/list_of_options';
import createButtonsForListOfOptions from '../../components/buttons_for_list_of_options';

function addListOfOptionsAndButtons() {
  const body: HTMLElement = document.body;
  const mainWrapper: Element = body.children[2].children[0];
  const optionsList = createListOfOptions();
  const btnsForOptionsList = createButtonsForListOfOptions();
  mainWrapper.append(optionsList, btnsForOptionsList);
}

export default addListOfOptionsAndButtons;
