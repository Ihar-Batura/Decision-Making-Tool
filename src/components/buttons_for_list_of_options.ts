import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnAddOption from '../functional/click_button.ts/click_btn_add_option';
import clickBtnClearList from '../functional/click_button.ts/click_btn_clear_list';
import clickBtnSaveList from '../functional/click_button.ts/click_btn_save_list';
import clickBtnLoadListFromFile from '../functional/click_button.ts/click_btn_load_list_from_file';
import clickBtnPasteList from '../functional/click_button.ts/click_btn_paste_list';

function createButtonsForListOfOptions(): HTMLElement {
  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['buttons-options-container'],
  });

  createButton({
    classes: ['btn', 'btn-add-option'],
    text: 'Add Option',
    onClick: () => clickBtnAddOption(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-paste-list'],
    text: 'Paste list',
    onClick: () => clickBtnPasteList(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-clear-list'],
    text: 'Clear list',
    onClick: () => clickBtnClearList(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-save-list'],
    text: 'Save list to file',
    onClick: () => clickBtnSaveList(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-load-list'],
    text: 'Load list from file',
    onClick: () => clickBtnLoadListFromFile(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-go-to-decision-picker'],
    text: 'Go to Decision Picker',
    onClick: () => console.log('Go to Decision Picker'),
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createButtonsForListOfOptions;
