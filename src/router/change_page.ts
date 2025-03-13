import cleanMain from '../functional/clean_element_or_page/clean_main';
import createPageListOfOptions from '../pages/page_list_of_options';
import createPageDecisionPicker from '../pages/page_decision_picker';
import createPageError from '../pages/page_error';
import { main } from '../main';
import findValidOptions from '../functional/work_with_options/find_valid_options';
import { IOption } from '../types/types';
import routerPath from './router_path';

function changePage(): void {
  const hash: string = window.location.hash;

  cleanMain();

  if (hash === '#/' || hash === '') {
    const pageListOfOptions: HTMLElement = createPageListOfOptions();
    main.append(pageListOfOptions);
  }

  if (hash === '#/decision-picker') {
    const validOptions: IOption[] = findValidOptions();

    if (validOptions.length >= 2) {
      const pageDecisionPicker: HTMLElement = createPageDecisionPicker();
      main.append(pageDecisionPicker);
    } else {
      const pageListOfOptions: HTMLElement = createPageListOfOptions();
      main.append(pageListOfOptions);
      routerPath('#/');
    }
  }

  if (hash !== '#/' && hash !== '#/decision-picker' && hash !== '') {
    const pageError: HTMLElement = createPageError();
    main.append(pageError);
  }
}

export default changePage;
