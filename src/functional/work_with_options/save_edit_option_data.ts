import getOptionsListFromLS from '../local_storage/get_options_list_from_LS';
import saveOptionsListToLS from '../local_storage/save_options_list_to_LS';
import { TEditOptionData, IOptions, IOption } from '../../types/types';

function saveEditOptionData({ parent, key, value }: TEditOptionData): void {
  const optionId: string | null = parent.textContent;

  if (optionId !== null) {
    const optionsList: IOptions | null = getOptionsListFromLS();
    if (optionsList !== null) {
      const list: IOption[] = optionsList.list;
      const lastId: number = optionsList.lastId;

      list.forEach((el) => {
        if (el.id === optionId) {
          if (key === 'Title') {
            el.title = value;
          }
          if (key === 'Weight') {
            el.weight = value;
          }
        }
      });

      saveOptionsListToLS({ list: list, lastId: lastId });
    }
  }
}

export default saveEditOptionData;
