import { IOptions } from '../../types/types';

function saveOptionsListToLS({ list, lastId }: IOptions): void {
  const data = { list: list, lastId: lastId };
  if (list.length === 0) {
    data.lastId = 0;
  }

  localStorage.setItem('OptionsListDMT', JSON.stringify(data));
}

export default saveOptionsListToLS;
