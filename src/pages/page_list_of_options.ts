import createHeader from '../components/header';
import createMain from '../components/main';
import createFooter from '../components/footer';
import createListOfOptions from '../components/list_of_options';
import createButtonsForListOfOptions from '../components/buttons_for_list_of_options';

function createPageListOfOptions(): void {
  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();

  const mainWrapper: Element = main.children[0];
  const optionsList = createListOfOptions();
  const btnsForOptionsList = createButtonsForListOfOptions();
  mainWrapper.append(optionsList, btnsForOptionsList);

  const footer: HTMLElement = createFooter();
  console.log(mainWrapper);

  body.append(header, main, footer);
}

export default createPageListOfOptions;
