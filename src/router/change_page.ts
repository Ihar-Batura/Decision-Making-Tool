import cleanMain from '../functional/clean_element_or_page/clean_main';
import createPageListOfOptions from '../pages/page_list_of_options';
import createPageDecisionPicker from '../pages/page_decision_picker';
import createPageError from '../pages/page_error';
import { main } from '../main';

function changePage(): void {
  const hash: string = window.location.hash;

  cleanMain();

  if (hash === '#/') {
    const pageListOfOptions: HTMLElement = createPageListOfOptions();
    main.append(pageListOfOptions);
  }
  if (hash === '#/decision-picker') {
    const pageDecisionPicker: HTMLElement = createPageDecisionPicker();
    main.append(pageDecisionPicker);
  }
  if (hash !== '#/' && hash !== '#/decision-picker') {
    const pageError: HTMLElement = createPageError();
    main.append(pageError);
  }
}

export default changePage;
