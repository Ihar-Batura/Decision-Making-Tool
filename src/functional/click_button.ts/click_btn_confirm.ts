import addNewOption from '../work_with_options/add_new_option';
import reloadMainOnPageListOfOptions from '../reload_page/reload_main_on_page_list_of_options';

function clickBtnConfirm(text: string): void {
  const trimText: string = text.trim();

  if (trimText.length < 3) return;

  const arrNewOptions: string[] = trimText.split('\n');

  arrNewOptions.forEach((el, ind) => {
    const arrFromEl: string[] = el.split(',');

    if (arrFromEl.length > 1) {
      const elWeight = arrFromEl.at(-1);

      if (elWeight) {
        const titleLength: number = arrNewOptions[ind].length - elWeight.length - 1;
        const elTitle = arrNewOptions[ind].slice(0, titleLength);
        addNewOption(elTitle, elWeight);
      }
    }
  });

  reloadMainOnPageListOfOptions();
}

export default clickBtnConfirm;
