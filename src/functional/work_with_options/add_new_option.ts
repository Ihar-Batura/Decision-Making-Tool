import getOptionsListFromLS from '../local_storage/get_options_list_from_LS';
import saveOptionsListToLS from '../local_storage/save_options_list_to_LS';
import { IOptions, IOption } from '../../types/types';

function addNewOption(): void {
  const options: IOptions | null = getOptionsListFromLS();
  if (options !== null) {
    const optionsList: IOption[] = options.list;
    const optionsLastId: number = options.lastId;
    const newLastId: number = optionsLastId + 1;
    const newOption = { id: `#${newLastId}`, title: '', weight: '' };

    optionsList.push(newOption);

    saveOptionsListToLS({ list: optionsList, lastId: newLastId });
  }
}

export default addNewOption;
