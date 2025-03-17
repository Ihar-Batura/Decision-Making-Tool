import createElement from '../create/create_element';
import createButtonsForDecisionPicker from '../components/buttons_for_decision_picker';
import createWheel from '../components/wheel';
import findValidOptions from '../functional/work_with_options/find_valid_options';
import { IOption } from '../types/types';
import mixRandomValidOptions from '../functional/random/mix_random_valid_options';
import getArrRandomOptionColors from '../functional/random/get_arr_random_option_colors';

function createPageDecisionPicker(): HTMLElement {
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  const btnsForDecisionPicker: HTMLElement = createButtonsForDecisionPicker();
  const pickedOption: HTMLElement = createElement({
    tag: 'div',
    classes: ['picked-option'],
    text: 'PRESS START BUTTON',
  });

  const arrOptions: IOption[] = findValidOptions();
  const mixArrOptions: IOption[] = mixRandomValidOptions(arrOptions);
  const arrOptionColors: string[] = getArrRandomOptionColors(arrOptions.length);

  const lastChild: ChildNode | null = btnsForDecisionPicker.lastChild;
  if (!(lastChild instanceof HTMLButtonElement)) {
    throw new Error("lastChild isn't HTMLButtonElement");
  }
  const btnStart: HTMLButtonElement = lastChild;

  const isInputElement: ChildNode | null = btnsForDecisionPicker.childNodes[2].lastChild;
  if (!(isInputElement instanceof HTMLInputElement)) {
    throw new Error("isInputElement isn't HTMLInputElement");
  }
  const input: HTMLInputElement = isInputElement;

  const wheel: HTMLCanvasElement = createWheel(
    mixArrOptions,
    arrOptionColors,
    btnStart,
    input,
    pickedOption
  );

  mainWrapper.append(btnsForDecisionPicker, pickedOption, wheel);

  return mainWrapper;
}

export default createPageDecisionPicker;
