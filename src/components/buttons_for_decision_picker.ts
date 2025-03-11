import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnBack from '../functional/click_button.ts/click_btn_back';
import clickBtnSound from '../functional/click_button.ts/click_btn_sound';
import checkSoundValueInLS from '../functional/local_storage/check_sound_value_in_LS';

function createButtonsForDecisionPicker(): HTMLElement {
  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['buttons-decision-container'],
  });

  createButton({
    classes: ['btn', 'btn-back'],
    onClick: () => clickBtnBack(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-time'],
    text: 'Time',
    onClick: () => console.log('click btn time'),
    parent: btnsContainer,
  });

  checkSoundValueInLS();

  const btnSound = createButton({
    classes: ['btn', 'btn-sound'],
    onClick: () => clickBtnSound(btnSound),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'btn-start'],
    text: 'Start',
    onClick: () => console.log('click btn Start'),
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createButtonsForDecisionPicker;
