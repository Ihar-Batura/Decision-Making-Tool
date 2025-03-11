import { main } from '../../main';
import cleanMain from '../clean_element_or_page/clean_main';
import createPageListOfOptions from '../../pages/page_list_of_options';
import routerPath from '../../router/router_path';

function reloadMainOnPageListOfOptions(): void {
  cleanMain();
  routerPath('#/');
  const pageListOfOptions: HTMLElement = createPageListOfOptions();
  main.append(pageListOfOptions);
}

export default reloadMainOnPageListOfOptions;
