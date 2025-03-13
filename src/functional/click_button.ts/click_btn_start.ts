function clickBtnStart(timerTime: number, hint: HTMLElement): void {
  if (timerTime >= 5) {
    hint.classList.remove('show');
  } else {
    hint.classList.add('show');
  }
}

export default clickBtnStart;
