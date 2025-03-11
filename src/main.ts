import './sass/style.scss';
import createHeader from './components/header';
import createMain from './components/main';
import createFooter from './components/footer';
import routerPage from './router/router_page';

export const body: HTMLElement = document.body;
const header: HTMLElement = createHeader();
export const main: HTMLElement = createMain();
const footer: HTMLElement = createFooter();

body.append(header, main, footer);

routerPage();
