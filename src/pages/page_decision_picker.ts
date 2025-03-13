import createElement from '../create/create_element';
import createButtonsForDecisionPicker from '../components/buttons_for_decision_picker';
import createWheel from '../components/wheel';

function createPageDecisionPicker(): HTMLElement {
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  const btnsForDecisionPicker: HTMLElement = createButtonsForDecisionPicker();
  const option: HTMLElement = createElement({
    tag: 'div',
    classes: ['picked-option'],
    text: 'PRESS START BUTTON',
  });

  const wheel: HTMLCanvasElement = createWheel();

  mainWrapper.append(btnsForDecisionPicker, option, wheel);

  return mainWrapper;
}

export default createPageDecisionPicker;
