import { main } from '../../main';

function cleanMain(): void {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

export default cleanMain;
