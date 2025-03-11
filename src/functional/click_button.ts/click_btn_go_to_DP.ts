import { IOption } from '../../types/types';
import { body, main } from '../../main';
import findValidOptions from '../work_with_options/find_valid_options';
import createModalWindowValidOptions from '../../components/modal_window_valid_options';
import cleanMain from '../clean_element_or_page/clean_main';
import createPageDecisionPicker from '../../pages/page_decision_picker';
import routerPath from '../../router/router_path';

function clickBtnGoToDecisionPicker(): void {
  const validOptions: IOption[] = findValidOptions();

  if (validOptions.length < 2) {
    const dialog: HTMLDialogElement = createModalWindowValidOptions();
    body.append(dialog);
    dialog.showModal();
  } else {
    cleanMain();
    const pageDecisionPicker: HTMLElement = createPageDecisionPicker();
    main.append(pageDecisionPicker);
    routerPath('/decision-picker');
  }
}

export default clickBtnGoToDecisionPicker;
