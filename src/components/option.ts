import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';
import { IOption } from '../types/types';

function createOption(options: IOption): HTMLElement {
  const { id, title, weight } = options;
  const optionContainer: HTMLElement = createElement({ tag: 'div', classes: ['option-container'] });

  const elementId: HTMLElement = createElement({
    tag: 'div',
    classes: ['option-container__id'],
    text: id,
  });

  const elementTitle = createInput({
    type: 'text',
    classes: ['option-container__title'],
    value: title,
    placeholder: 'Title',
  });

  const elementWeight = createInput({
    type: 'text',
    classes: ['option-container__weight'],
    value: weight,
    placeholder: 'Weight',
  });

  const elementButton = createButton({
    classes: ['btn', 'option-container__btn'],
    text: 'Delete',
    onClick: () => console.log('click'),
  });

  optionContainer.append(elementId, elementTitle, elementWeight, elementButton);

  return optionContainer;
}

export default createOption;
