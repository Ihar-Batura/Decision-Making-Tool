import createElement from '../create/create_element';
import createButton from '../create/create_button';
import reloadMainOnPageListOfOptions from '../functional/reload_page/reload_main_on_page_list_of_options';

function createPageError(): HTMLElement {
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  createElement({
    tag: 'div',
    classes: ['error-message'],
    text: 'Something went wrong',
    parent: mainWrapper,
  });

  createButton({
    classes: ['btn', 'btn-error'],
    onClick: () => reloadMainOnPageListOfOptions(),
    parent: mainWrapper,
  });

  return mainWrapper;
}

export default createPageError;
