import createElement from '../create/create_element';
import createButton from '../create/create_button';
import createInput from '../create/create_input';
import clickBtnBack from '../functional/click_button.ts/click_btn_back';
import clickBtnSound from '../functional/click_button.ts/click_btn_sound';
import checkSoundValueInLS from '../functional/local_storage/check_sound_value_in_LS';
import isSoundMute from '../functional/sound/is_sound_mute';
import clickBtnStart from '../functional/click_button.ts/click_btn_start';
import disableButtons from '../functional/disable/disable_buttons';

function createButtonsForDecisionPicker(): HTMLElement {
  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['buttons-decision-container'],
  });

  const hint: HTMLElement = createElement({
    tag: 'div',
    classes: ['hint'],
    text: '!!! The value must be greater than or equal to 5 ',
    parent: btnsContainer,
  });

  const btnBack: HTMLButtonElement = createButton({
    classes: ['btn', 'btn-back'],
    onClick: () => clickBtnBack(),
    parent: btnsContainer,
  });

  const timerContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['timer-container'],
    parent: btnsContainer,
  });

  const timerImg: HTMLElement = createElement({
    tag: 'div',
    classes: ['timer-img'],
    parent: timerContainer,
  });

  const timerInput: HTMLInputElement = createInput({
    type: 'number',
    classes: ['timer-input'],
    value: '10',
    placeholder: 'Seconds',
    min: '5',
    parent: timerContainer,
  });

  checkSoundValueInLS();

  const btnSound: HTMLButtonElement = createButton({
    classes: ['btn', 'btn-sound'],
    onClick: () => clickBtnSound(btnSound),
    parent: btnsContainer,
  });

  //btnBack, timerInput, btnSound, btnStart; их нужно обрабатывать

  isSoundMute(btnSound);

  const btnStart: HTMLButtonElement = createButton({
    classes: ['btn', 'btn-start'],
    text: 'Start',
    parent: btnsContainer,
  });

  btnStart.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault();
    const timerTime: number = +timerInput.value;
    clickBtnStart(timerTime, hint);
    if (timerTime >= 5) {
      disableButtons({
        btnBack: btnBack,
        btnSound: btnSound,
        btnStart: btnStart,
        timerInput: timerInput,
        timerImg: timerImg,
        timerTime: timerTime,
      });
    }
  });

  return btnsContainer;
}

export default createButtonsForDecisionPicker;
