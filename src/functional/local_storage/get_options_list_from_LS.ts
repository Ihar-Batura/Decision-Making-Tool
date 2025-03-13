import { IOptions } from '../../types/types';

function getOptionsListFromLS(): IOptions | null {
  const optionsList: string | null = localStorage.getItem('OptionsListDMT');
  if (optionsList !== null) {
    const optionsListData: IOptions = JSON.parse(optionsList);
    return optionsListData;
  }
  return null;
}

export default getOptionsListFromLS;
