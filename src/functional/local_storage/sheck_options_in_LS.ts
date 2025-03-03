import getOptionsListFromLS from './get_options_list_from_LS';
import saveOptionsListToLS from './save_options_list_to_LS';
import { IOptions } from '../../types/types';

function checkOptionsInLS(): void {
  const options = getOptionsListFromLS();
  if (options === null) {
    const baseOption: IOptions = {
      list: [{ id: '#1', title: '', weight: '' }],
      lastId: 1,
    };
    saveOptionsListToLS(baseOption);
  }
}

export default checkOptionsInLS;
