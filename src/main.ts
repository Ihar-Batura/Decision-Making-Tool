import './sass/style.scss';
import createHeader from './components/header';
import createMain from './components/main';
import createFooter from './components/footer';
import createPageListOfOptions from './pages/page_list_of_options';

export const body: HTMLElement = document.body;
const header: HTMLElement = createHeader();
export const main: HTMLElement = createMain();
const pageListOfOptions: HTMLElement = createPageListOfOptions();
main.append(pageListOfOptions);
const footer: HTMLElement = createFooter();

body.append(header, main, footer);
