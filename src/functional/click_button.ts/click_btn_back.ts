import reloadMainOnPageListOfOptions from '../reload_page/reload_main_on_page_list_of_options';
import routerPath from '../../router/router_path';

function clickBtnBack(): void {
  reloadMainOnPageListOfOptions();
  routerPath('#/');
}

export default clickBtnBack;
