import { IOptions } from '../../types/types';

function getOptionsListFromLS(): IOptions | null {
  const optionsList: string | null = localStorage.getItem('OptionsListDMT');
  if (optionsList) {
    const optionsListData = JSON.parse(optionsList);
    return optionsListData;
  }
  return null;
}

export default getOptionsListFromLS;
