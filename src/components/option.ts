import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';
import { IOption } from '../types/types';
import clickBtnDeleteOption from '../functional/click_button.ts/click_btn_delete_option';
import saveEditOptionData from '../functional/work_with_options/save_edit_option_data';

function createOption(options: IOption): HTMLElement {
  const { id, title, weight } = options;
  const optionContainer: HTMLElement = createElement({ tag: 'div', classes: ['option-container'] });

  const elementId: HTMLElement = createElement({
    tag: 'div',
    classes: ['option-container-id'],
    text: id,
  });

  const elementTitle: HTMLInputElement = createInput({
    type: 'text',
    classes: ['option-container-title'],
    value: title,
    placeholder: 'Title',
    onInput: () =>
      saveEditOptionData({
        parent: elementId,
        key: elementTitle.placeholder,
        value: elementTitle.value,
      }),
  });

  const elementWeight: HTMLInputElement = createInput({
    type: 'number',
    classes: ['option-container-weight'],
    value: weight,
    placeholder: 'Weight',
    onInput: () =>
      saveEditOptionData({
        parent: elementId,
        key: elementWeight.placeholder,
        value: elementWeight.value,
      }),
  });

  const elementButton: HTMLButtonElement = createButton({
    classes: ['btn', 'option-container-btn'],
    text: 'Delete',
    onClick: () => clickBtnDeleteOption(elementId),
  });

  optionContainer.append(elementId, elementTitle, elementWeight, elementButton);

  return optionContainer;
}

export default createOption;
