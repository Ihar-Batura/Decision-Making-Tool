import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';
import { IOption } from '../types/types';
import clickBtnDeleteOption from '../functional/click_button.ts/click_btn_delete_option';

function createOption(options: IOption): HTMLElement {
  const { id, title, weight } = options;
  const optionContainer: HTMLElement = createElement({ tag: 'div', classes: ['option-container'] });

  const elementId: HTMLElement = createElement({
    tag: 'div',
    classes: ['option-container-id'],
    text: id,
  });

  const elementTitle = createInput({
    type: 'text',
    classes: ['option-container-title'],
    value: title,
    placeholder: 'Title',
  });

  const elementWeight = createInput({
    type: 'number',
    classes: ['option-container-weight'],
    value: weight,
    placeholder: 'Weight',
  });

  const elementButton = createButton({
    classes: ['btn', 'option-container-btn'],
    text: 'Delete',
    onClick: () => clickBtnDeleteOption(elementId),
  });

  optionContainer.append(elementId, elementTitle, elementWeight, elementButton);

  return optionContainer;
}

export default createOption;
