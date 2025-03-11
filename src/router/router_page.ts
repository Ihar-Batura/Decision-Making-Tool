import changePage from './change_page';

function routerPage(): void {
  window.addEventListener('load', () => {
    changePage();
  });

  window.addEventListener('hashchange', function () {
    changePage();
  });
}

export default routerPage;
