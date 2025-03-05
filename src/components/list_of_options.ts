import createElement from '../create/create_element';
import checkOptionsInLS from '../functional/local_storage/check_options_in_LS';
import getOptionsListFromLS from '../functional/local_storage/get_options_list_from_LS';
import createOption from './option';

function createListOfOptions(): HTMLElement {
  const listOfOptions = createElement({ tag: 'div', classes: ['list-options'] });

  checkOptionsInLS();

  const options = getOptionsListFromLS();

  if (options !== null && options.list.length > 0) {
    options.list.forEach((element) => {
      const elementOption: HTMLElement = createOption({
        id: element.id,
        title: element.title,
        weight: element.weight,
      });

      listOfOptions.append(elementOption);
    });
  }

  return listOfOptions;
}

export default createListOfOptions;
