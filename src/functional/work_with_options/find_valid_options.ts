import { IOptions, IOption } from '../../types/types';
import getOptionsListFromLS from '../local_storage/get_options_list_from_LS';

function findValidOptions(): IOption[] {
  const optionsData: IOptions | null = getOptionsListFromLS();

  if (optionsData === null || optionsData.list.length < 2) {
    return [];
  }

  const optionsList: IOption[] = optionsData.list;
  const filterOptionsList: IOption[] = optionsList.filter(
    (el) => el.title.length > 0 && +el.weight > 0
  );
  return filterOptionsList;
}

export default findValidOptions;
