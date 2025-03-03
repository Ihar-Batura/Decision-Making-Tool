import { IOptions } from '../../types/types';

function saveOptionsListToLS({ list, lastId }: IOptions): void {
  const data = { list: list, lastId: lastId };
  localStorage.setItem('OptionsListDMT', JSON.stringify(data));
}

export default saveOptionsListToLS;
