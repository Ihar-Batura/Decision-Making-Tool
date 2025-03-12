function clickBtnStart(inputValue: string, hint: HTMLElement): void {
  console.log('click btn Start');
  if (+inputValue >= 5) {
    hint.classList.remove('show');
    console.log('Start');
  } else {
    hint.classList.add('show');
  }
}

export default clickBtnStart;
