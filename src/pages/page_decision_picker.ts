import createElement from '../create/create_element';
import createButtonsForDecisionPicker from '../components/buttons_for_decision_picker';

function createPageDecisionPicker(): HTMLElement {
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  const btnsForDecisionPicker = createButtonsForDecisionPicker();

  mainWrapper.append(btnsForDecisionPicker);

  return mainWrapper;
}

export default createPageDecisionPicker;
