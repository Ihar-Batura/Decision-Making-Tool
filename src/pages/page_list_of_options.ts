import createElement from '../create/create_element';
import createListOfOptions from '../components/list_of_options';
import createButtonsForListOfOptions from '../components/buttons_for_list_of_options';

function createPageListOfOptions(): HTMLElement {
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  const optionsList = createListOfOptions();
  const btnsForOptionsList = createButtonsForListOfOptions();

  mainWrapper.append(optionsList, btnsForOptionsList);

  return mainWrapper;
}

export default createPageListOfOptions;
