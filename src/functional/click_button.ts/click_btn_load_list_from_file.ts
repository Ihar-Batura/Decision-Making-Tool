import reloadMainOnPageListOfOptions from '../reload_page/reload_main_on_page_list_of_options';

function clickBtnLoadListFromFile(): void {
  const input: HTMLInputElement = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.click();

  input.addEventListener('change', () => {
    if (input.files !== null) {
      const file: File = input.files[0];
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = function () {
        const optionList = reader.result;

        if (typeof optionList === 'string') {
          localStorage.setItem('OptionsListDMT', optionList);
          reloadMainOnPageListOfOptions();
        }
      };
    }
  });
}

export default clickBtnLoadListFromFile;
